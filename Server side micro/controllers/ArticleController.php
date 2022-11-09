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
		
		$model->title        = $arg['title'] ?? 'No title';
		$model->category     = json_encode($category);
		$model->author       = $arg['author'] ?? 'Unknown author';
		$model->published_at = date('Y-m-d H:i');
		$model->article      = $arg['text'] ?? 'No text';

		$model->insert();
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
