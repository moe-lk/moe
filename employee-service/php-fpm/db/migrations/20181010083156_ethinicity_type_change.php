<?php


use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class EthinicityTypeChange extends AbstractMigration
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
        $users = $this->table('Personal_Details');
        $users->removeColumn('ethinicity');
        $users->addColumn('ethinicity', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $users->removeColumn('gender');
        $users->addColumn('gender', 'string', ['limit' => MysqlAdapter::TEXT_TINY ,'null' => true]);
        $users->removeColumn('civil_status');
        $users->addColumn('civil_status', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $users->update();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {
        $users = $this->table('Personal_Details');
        $users->removeColumn('ethinicity');
        $users->addColumn('ethinicity', 'string', ['limit' => 20]);
        $users->removeColumn('gender');
        $users->addColumn('gender', 'string', ['limit' => 10]);
        $users->removeColumn('civil_status');
        $users->addColumn('civil_status', 'string', ['limit' => 10]);
        $users->update();
    }
}
