<?php

namespace micro\models;

use yii\db\ActiveRecord;

class Article extends ActiveRecord
{
	public static function tableName()
	{
		return '{{articles}}';
	}	
}
