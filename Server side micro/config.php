<?php

return [
	'id' => 'micro',
	// basePath (базовый путь) приложения будет каталог `micro-app`
	'basePath' => __DIR__,
	// это пространство имен где приложение будет искать все контроллеры
	'controllerNamespace' => 'micro\controllers',
	// установим псевдоним '@micro', чтобы включить автозагрузку классов из пространства имен 'micro'
	'aliases' => ['@micro' => __DIR__,],
	'components' => [
		'db' => [
			'class'    => 'yii\db\Connection',
			'dsn'      => 'mysql:host=localhost;dbname=articles',
			'username' => 'cinema',
			'password' => 'asdf',
			'charset'  => 'utf8',
		],
		'user' => [
			'identityClass'   => 'micro\models\User',
			'enableAutoLogin' => true,
		],
		'response' => [
			'formatters' =>
			[
				\yii\web\Response::FORMAT_JSON =>
				[
					'class' => 'yii\web\JsonResponseFormatter',
					'prettyPrint' => YII_DEBUG, // используем "pretty" в режиме отладки
					'encodeOptions' => JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
				],
			],
		],
		'user' =>
		[
			'class'         => 'micro\models\User',
			'enableSession' => false,
		],
	],
	// 'urlManager' =>
	// [
	// 'enablePrettyUrl'     => true,
	// 'enableStrictParsing' => true,
	// 'showScriptName'      => false,
	// 'rules' =>
	// [
	// 	['class' => 'yii\rest\UrlRule', 'controller' => 'user'],
	// ],
	// ],
	// 'request' => [
	// 	'parsers' => [
	// 		'application/json' => 'yii\web\JsonParser',
	// 	],
	// ],
];
