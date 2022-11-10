<?php

namespace micro\controllers;

use yii\rest\ActiveController;
use micro\models\Article;

class ArticleController extends ActiveController
{
	public $modelClass = 'micro\models\Article';

	public $serializer =
	[
		'class'              => 'yii\rest\Serializer',
		'collectionEnvelope' => 'items',
	];


	public function actionStoreart()
	{
		$arg = file_get_contents('php://input') ?? '';
		$arg = (array) json_decode($arg) ?? [];

		if (!$arg) return;

		$model    = new Article;
		$category = $arg['category'] ?? [];
		$category = (array) $category;

		$model->title           = $arg['title'] ?? 'No title';
		$model->category_id     = $category['id'] ?? 0;
		$model->category_title  = $category['title'] ?? 'none';
		$model->author          = $arg['author'] ?? 'Unknown author';
		$model->published_at    = date('Y-m-d H:i');
		$model->article         = $arg['text'] ?? 'No text';

		$model->insert();
	}


	public function actionLoadart()
	{
		$per_page = $_GET['per-page'] ?? 20;
		$per_page < 1 and $per_page = 20;
		$page     = $_GET['page'] ?? 1;
		$page < 1 and $page = 1;
		$category = $_GET['category'] ?? 0;
		$category < 0 and $category = 0;
		$categoryRequirement = $category ? "category_id = $category" : '';

		$model    = new Article;
		$query    = $model->find()->where($categoryRequirement)
			->offset(($page - 1) * $per_page)->limit($per_page);
		$all      = $query->all();
		$count    = $query->count();
		$pagesNum = intdiv($count, $per_page);
		$pagesNum * $per_page <> $count and $pagesNum++;
		$acc = [];

		foreach ($all as $article) {
			$newArticle = [];
			$newArticle['title']        = $article['title'] ?? 'No title';
			$newArticle['author']       = $article['author'] ?? 'Unknown author';
			$newArticle['published_at'] = $article['published_at']
				?? 'Unknown publishig date';
			$newArticle['article']      = $article['article'] ?? 'No text';

			$newArticle['category'] =
				[
					'id'    => $article['category_id'],
					'title' => $article['category_title']
				];

			$acc[] = $newArticle;
		}

		$meta =
			[
				'pageCount'   => $pagesNum, // Нужно вычислить
				'currentPage' => $page, // Стр с таким номером может и не быть
			];

		$acc =
			[
				'items' => $acc,
				'_meta' => $meta,
			];

		return $acc;
	}


	public function behaviors()
	{
		return [
			'corsFilter' => [
				'class' => \yii\filters\Cors::class,
				'cors' => [
					// restrict access to
					'Origin' => ['http://localhost:3000'],

					// Allow only POST and PUT methods
					// 'Access-Control-Request-Method' => ['POST', 'PUT'],

					// Allow only headers 'X-Wsse'
					// 'Access-Control-Request-Headers' => [/* 'X-Wsse', */ '*'],

					// Allow credentials (cookies, authorization headers, etc.) to be exposed to the browser
					// 'Access-Control-Allow-Credentials' => true,

					// Allow OPTIONS caching
					'Access-Control-Max-Age' => 3600,

					// Allow the X-Pagination-Current-Page header 
					// to be exposed to the browser.
					'Access-Control-Expose-Headers' => ['*'],

					'Access-Control-Allow-Headers'  => ['*'],
				],

			],
		];
	}
}
