<?php

return [
	'id' => 'micro-app-console',
	// basePath (базовый путь) приложения будет каталог `micro-app`
	'basePath' => __DIR__,
	// это пространство имен где приложение будет искать все контроллеры
	'controllerNamespace' => 'micro\controllers',
	// установим псевдоним '@micro', чтобы включить автозагрузку классов из пространства имен 'micro'
	'aliases' => [
		'@micro' => __DIR__,
	],
	'components' => [
		'db' => [
			'class'    => 'yii\db\Connection',
			'dsn'      => 'mysql:host=localhost;dbname=articles',
			'username' => 'cinema',
			'password' => 'asdf',
			'charset'  => 'utf8',
		],
	],
];
