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

	public function actionView($id)
	{
		return Article::findOne($id);
	}
}
