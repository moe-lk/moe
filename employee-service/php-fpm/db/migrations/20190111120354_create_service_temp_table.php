<?php

use Phinx\Db\Adapter\MysqlAdapter;
use Phinx\Migration\AbstractMigration;

class CreateServiceTempTable extends AbstractMigration
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

        $this->table("Tmp_Service", [
            'id' => false,
            'primary_key' => ['id'],
            'engine' => 'InnoDB',
            'encoding' => 'utf8',
            'collation' => 'utf8_bin',
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
            ->addColumn('person_id', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'id',
            ])
            ->addColumn('NIC', 'string', [
                'null' => true,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'person_id',
            ])
            ->addColumn('service_mode', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'NIC',
            ])
            ->addColumn('service_status', 'string', [
                'null' => true,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'service_mode',
            ])
            ->addColumn('work_place_id', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'service_status',
            ])
            ->addColumn('sub_location_id', 'string', [
                'null' => true,
                'limit' => 5,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'work_place_id',
            ])
            ->addColumn('work_branch_id', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'sub_location_id',
            ])
            ->addColumn('work_division_id', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'work_branch_id',
            ])
            ->addColumn('designation_id', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'work_division_id',
            ])
            ->addColumn('appoint_date', 'date', [
                'null' => true,
                'after' => 'designation_id',
            ])
            ->addColumn('duty_date', 'date', [
                'null' => true,
                'after' => 'appoint_date',
            ])
            ->addColumn('duty_date_terminate', 'date', [
                'null' => true,
                'after' => 'duty_date',
            ])
            ->addColumn('off_letter_no', 'string', [
                'null' => true,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'duty_date_terminate',
            ])
            ->addColumn('grade', 'string', [
                'null' => true,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'off_letter_no',
            ])
            ->addColumn('date_promoted', 'date', [
                'null' => true,
                'after' => 'grade',
            ])
            ->addColumn('salary_drawned', 'string', [
                'null' => true,
                'limit' => 100,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'date_promoted',
            ])
            ->addColumn('barcode', 'string', [
                'null' => true,
                'limit' => 25,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'salary_drawned',
            ])
            ->addColumn('user_updated', 'string', [
                'null' => true,
                'limit' => 20,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'barcode',
            ])
            ->addColumn('service_sector', 'string', [
                'null' => false,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'user_updated',
            ])
            ->addColumn('school_data', 'json', [
                'null' => false,
                'after' => 'service_sector',
            ])
            ->addColumn('time_updated', 'timestamp', [
                'null' => false,
                'default' => 'CURRENT_TIMESTAMP',
            ])
            ->addIndex(['barcode'], [
                'name' => 'barcode',
                'unique' => true,
            ])
            ->addIndex(['barcode'], [
                'name' => 'barcode_2',
                'unique' => true,
            ])
            ->addIndex(['NIC'], [
                'name' => 'NIC',
                'unique' => false,
            ])
            ->addIndex(['service_mode'], [
                'name' => 'Service_fk1',
                'unique' => false,
            ])
            ->addIndex(['work_place_id'], [
                'name' => 'Service_fk2',
                'unique' => false,
            ])
            ->addIndex(['work_branch_id'], [
                'name' => 'Service_fk3',
                'unique' => false,
            ])
            ->addIndex(['designation_id'], [
                'name' => 'Service_fk4',
                'unique' => false,
            ])
            ->addIndex(['work_division_id'], [
                'name' => 'Service_fk5',
                'unique' => false,
            ])
            ->addIndex(['user_updated'], [
                'name' => 'user_updated',
                'unique' => false,
            ])
            ->addIndex(['person_id'], [
                'name' => 'person_id',
                'unique' => false,
            ])
            ->create();

    }

    public function down()
    {
        $this->table('Tmp_Service')->drop()->save();
    }
}
