<?php

use Phinx\Db\Adapter\MysqlAdapter;
use Phinx\Migration\AbstractMigration;

class CreatePersonalDetailTempTable extends AbstractMigration
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
        $this->table("Tmp_Personal_Details", [
            'id' => false,
            'primary_key' => ['id'],
            'engine' => 'InnoDB',
            'encoding' => 'utf8',
            'collation' => 'utf8_general_ci',
            'comment' => '',
            'row_format' => 'Dynamic',
        ])
            ->addColumn('id', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'identity' => 'enable',
                'after' => 'time_updated',
            ])
            ->addColumn('NIC', 'string', [
                'null' => false,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'id',
            ])
            ->addColumn('title', 'string', [
                'null' => false,
                'limit' => 10,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'NIC',
            ])
            ->addColumn('in_name', 'string', [
                'null' => true,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'title',
            ])
            ->addColumn('si_in_name', 'string', [
                'null' => true,
                'limit' => 150,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'in_name',
            ])
            ->addColumn('ta_in_name', 'string', [
                'null' => true,
                'limit' => 150,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'si_in_name',
            ])
            ->addColumn('dob', 'date', [
                'null' => false,
                'after' => 'ta_in_name',
            ])
            ->addColumn('f_appoint_date', 'date', [
                'null' => true,
                'after' => 'dob',
            ])
            ->addColumn('f_appoint_type', 'string', [
                'null' => true,
                'limit' => 10,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'f_appoint_date',
            ])
            ->addColumn('active', 'string', [
                'null' => false,
                'default' => false,
                'limit' => 6,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'f_appoint_type',
            ])
            ->addColumn('profile_pic', 'string', [
                'null' => true,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'active',
            ])
            ->addColumn('user_updated', 'string', [
                'null' => true,
                'limit' => 20,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'profile_pic',
            ])
            ->addColumn('approved', 'integer', [
                'null' => false,
                'default' => 0,
                'limit' => MysqlAdapter::INT_TINY,
                'precision' => '3',
                'after' => 'user_updated',
            ])
            ->addColumn('ethinicity', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_TINY,
                'precision' => '3',
                'after' => 'approved',
            ])
            ->addColumn('gender', 'string', [
                'null' => true,
                'limit' => MysqlAdapter::TEXT_TINY,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'ethinicity',
            ])
            ->addColumn('civil_status', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_TINY,
                'precision' => '3',
                'after' => 'gender',
            ])
            ->addColumn('owner', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'civil_status',
            ])
            ->addColumn('nominators', 'json', [
                'null' => true,
                'after' => 'owner',
            ])
            ->addColumn('religion', 'string', [
                'null' => false,
                'limit' => 255,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'nominators',
            ])
            ->addColumn('en_fullname', 'string', [
                'null' => false,
                'limit' => 150,
                'collation' => 'utf8_general_ci',
                'encoding' => 'utf8',
                'after' => 'religion',
            ])
            ->addIndex(['NIC'], [
                'name' => 'NIC',
                'unique' => false,
            ])
            ->addIndex(['user_updated'], [
                'name' => 'user_updated',
                'unique' => false,
            ])
            ->addIndex(['owner'], [
                'name' => 'owner',
                'unique' => false,
            ])
            ->addIndex(['in_name'], [
                'name' => 'f_name',
                'unique' => false,
                'type' => 'fulltext',
            ])
            ->addColumn('created', 'timestamp', [
                'null' => false,
                'default' => 'CURRENT_TIMESTAMP',
            ])
            ->addColumn('time_updated', 'timestamp', [
                'null' => false,
                'default' => 'CURRENT_TIMESTAMP',
            ])
            ->create();

    }

    public function down()
    {
        $this->table('Tmp_Personal_Details')->drop()->save();   
    }
}
