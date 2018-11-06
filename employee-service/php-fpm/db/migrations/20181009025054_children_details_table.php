<?php

use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class ChildrenDetailsTable extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    addCustomColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Any other destructive changes will result in an error when trying to
     * rollback the migration.
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function up()
    {
        $table = $this->table('Children_Details');
        $table->addColumn('person_id', 'integer');
        $table->addForeignKey('person_id', 'Personal_Details', ['id'],
                            ['constraint' => 'child_parent_id']);
        $table->addColumn('name', 'string', ['limit' => 255]);
        $table->addColumn('dob', 'date');
        $table->addColumn('gender', 'integer', ['limit' => MysqlAdapter::TEXT_TINY ,'null' => true]);
        $table->addColumn('bc', 'text', ['limit' => MysqlAdapter::TEXT_LONG,'null' => true]);
        $table->addTimeStamps();
        $table->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {
        $this->table('Children_Details')->drop()->save();
    }
}
