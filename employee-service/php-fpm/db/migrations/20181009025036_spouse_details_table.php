<?php

use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class SpouseDetailsTable extends AbstractMigration
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
        $table = $this->table('Spouse_Details');
        $table->addColumn('person_id', 'integer');
        $table->addForeignKey('person_id', 'Personal_Details', ['id'],
                            ['constraint' => 'spouse_id']);
        $table->addColumn('f_name', 'string', ['limit' => 255]);
        $table->addColumn('m_name', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('l_name', 'string', ['limit' => 255]);
        $table->addColumn('in_name', 'string', ['limit' => 255]);
        $table->addColumn('si_in_name', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('ta_in_name', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('dob', 'date');
        $table->addColumn('nic', 'string', ['limit' => 15]);
        $table->addColumn('ethinicity', 'integer', ['limit' => MysqlAdapter::INT_TINY,'null' => true]);
        $table->addColumn('gender', 'integer', ['limit' => MysqlAdapter::INT_TINY ,'null' => true]);
        $table->addColumn('occupation', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('address', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('office_address', 'string', ['limit' => 255,'null' => true]);
        $table->addColumn('telephone', 'integer', ['limit' => 15,'null' => true]);
        $table->addTimeStamps();
        $table->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {
        $this->table('Spouse_Details')->drop()->save();
    }
}
