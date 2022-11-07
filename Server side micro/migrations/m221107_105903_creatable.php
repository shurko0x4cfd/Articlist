<?php

use yii\db\Schema;
use yii\db\Migration;

/**
 * Class m221107_105903_creatable
 */
class m221107_105903_creatable extends Migration
{
	/**
	 * {@inheritdoc}
	 */
	public function up()
	{
		$this->createTable('articles', [
			'id'           => Schema::TYPE_PK,
			'title'        => Schema::TYPE_STRING   . ' NOT NULL',
			'category_id'  => Schema::TYPE_INTEGER  . ' NOT NULL',
			'author'       => Schema::TYPE_STRING   . ' NOT NULL',
			'published_at' => Schema::TYPE_DATETIME . ' NOT NULL',
			'article'      => Schema::TYPE_TEXT     . ' NOT NULL',
		]);
	}

	/**
	 * {@inheritdoc}
	 */
	public function down()
	{
		$this->dropTable('articles');
	}

	/*
	// Use up()/down() to run migration code without a transaction.
	public function safeUp()
	{

	}

	public function safeDown()
	{
		echo "m221107_105903_creatable cannot be reverted.\n";

		return false;
	}
	*/
}
