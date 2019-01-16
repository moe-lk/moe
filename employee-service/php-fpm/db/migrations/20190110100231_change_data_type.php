<?php


use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class ChangeDataType extends AbstractMigration
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
        $table = $this->table('General_Service');
        $table->removeColumn('way_join');
        $table->addColumn('way_join', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $table->removeColumn('grade');
        $table->addColumn('grade', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $table->removeColumn('medium');
        $table->addColumn('medium', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $table->update();

    }

    public function down()
    {
        $table = $this->table('General_Service');
        $table->removeColumn('way_join');
        $table->addColumn('way_join', 'string', ['limit' => 20]);
        $table->removeColumn('grade');
        $table->addColumn('grade', 'string', ['limit' => 10]);
        $table->removeColumn('medium');
        $table->addColumn('medium', 'string', ['limit' => 10]);
        $table->update();
    }
}
