<?php

use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class CreateSpouseDetailsTmpTable extends AbstractMigration
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
        $this->table("Tmp_Spouse_Details", [
            'id' => false,
            'primary_key' => ['id'],
            'engine' => 'InnoDB',
            'encoding' => 'utf8',
            'collation' => 'utf8_general_ci',
            'comment' => '',
            'row_format' => 'Dynamic'])
            ->addColumn('id', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'identity' => 'enable',
            ])
            ->addColumn('person_id', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'id',
            ])
            ->addColumn('f_name', 'string', [
                'null' => false,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'person_id',
            ])
            ->addColumn('m_name', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'f_name',
            ])
            ->addColumn('l_name', 'string', [
                'null' => false,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'm_name',
            ])
            ->addColumn('in_name', 'string', [
                'null' => false,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'l_name',
            ])
            ->addColumn('si_in_name', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'in_name',
            ])
            ->addColumn('ta_in_name', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'si_in_name',
            ])
            ->addColumn('dob', 'date', [
                'null' => false,
                'after' => 'ta_in_name',
            ])
            ->addColumn('nic', 'string', [
                'null' => false,
                'limit' => 15,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'dob',
            ])
            ->addColumn('ethinicity', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_TINY,
                'precision' => '3',
                'after' => 'nic',
            ])
            ->addColumn('gender', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'ethinicity',
            ])
            ->addColumn('occupation', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'gender',
            ])
            ->addColumn('address', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'occupation',
            ])
            ->addColumn('office_address', 'string', [
                'null' => true,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'address',
            ])
            ->addColumn('telephone', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'office_address',
            ])
            ->addColumn('created_at', 'timestamp', [
                'null' => false,
                'default' => 'CURRENT_TIMESTAMP',
                'after' => 'telephone',
            ])
            ->addColumn('updated_at', 'timestamp', [
                'null' => true,
                'default' => 'CURRENT_TIMESTAMP',
                'after' => 'created_at',
            ])
            ->addIndex(['person_id'], [
                'name' => 'spouse_id',
                'unique' => false,
            ])
            ->create();
    }

    public function down()
    {
        $this->table('Tmp_Spouse_Details')->drop()->save();
    }
}
