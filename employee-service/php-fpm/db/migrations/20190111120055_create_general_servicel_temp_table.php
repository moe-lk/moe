<?php


use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class CreateGeneralServicelTempTable extends AbstractMigration
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
        $this->table("Tmp_General_Service", [
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
        ->addColumn('date_join', 'date', [
            'null' => false,
            'after' => 'NIC',
        ])
        ->addColumn('cadre', 'string', [
            'null' => false,
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'date_join',
        ])
        ->addColumn('grade_join', 'string', [
            'null' => false,
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'cadre',
        ])
        ->addColumn('entrance_exam_rank', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_REGULAR,
            'precision' => '10',
            'after' => 'grade_join',
        ])
        ->addColumn('subject', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_REGULAR,
            'precision' => '10',
            'after' => 'entrance_exam_rank',
        ])
        ->addColumn('confirm', 'string', [
            'null' => false,
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'subject',
        ])
        ->addColumn('confirm_date', 'date', [
            'null' => true,
            'after' => 'confirm',
        ])
        ->addColumn('promotion_date', 'date', [
            'null' => true,
            'after' => 'confirm_date',
        ])
        ->addColumn('f_appoint_date', 'date', [
            'null' => true,
            'after' => 'promotion_date',
        ])
        ->addColumn('eb_1_pass', 'date', [
            'null' => true,
            'after' => 'f_appoint_date',
        ])
        ->addColumn('eb_2_pass', 'date', [
            'null' => true,
            'after' => 'eb_1_pass',
        ])
        ->addColumn('eb_3_pass', 'date', [
            'null' => true,
            'after' => 'eb_2_pass',
        ])
        ->addColumn('pg_dip_pass', 'date', [
            'null' => true,
            'after' => 'eb_3_pass',
        ])
        ->addColumn('pg_deg_pass', 'date', [
            'null' => true,
            'after' => 'pg_dip_pass',
        ])
        ->addColumn('cb_1_date', 'date', [
            'null' => true,
            'after' => 'pg_deg_pass',
        ])
        ->addColumn('cb_2_date', 'date', [
            'null' => true,
            'after' => 'cb_1_date',
        ])
        ->addColumn('cb_3_date', 'date', [
            'null' => true,
            'after' => 'cb_2_date',
        ])
        ->addColumn('status', 'string', [
            'null' => true,
            'default' => '"Active"',
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'cb_3_date',
        ])
        ->addColumn('deactivate_type_id', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_REGULAR,
            'precision' => '10',
            'after' => 'status',
        ])
        ->addColumn('deactivate_date', 'date', [
            'null' => true,
            'after' => 'deactivate_type_id',
        ])
        ->addColumn('w_and_op', 'string', [
            'null' => false,
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'deactivate_date',
        ])
        ->addColumn('service_sector', 'string', [
            'null' => false,
            'limit' => 15,
            'collation' => 'utf8_bin',
            'encoding' => 'utf8',
            'after' => 'w_and_op',
        ])
        ->addColumn('class', 'integer', [
            'null' => false,
            'limit' => MysqlAdapter::INT_REGULAR,
            'precision' => '10',
            'after' => 'service_sector',
        ])
        ->addColumn('way_join', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_TINY,
            'precision' => '3',
            'after' => 'class',
        ])
        ->addColumn('grade', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_TINY,
            'precision' => '3',
            'after' => 'way_join',
        ])
        ->addColumn('medium', 'integer', [
            'null' => true,
            'limit' => MysqlAdapter::INT_TINY,
            'precision' => '3',
            'after' => 'grade',
        ])
    ->addIndex(['NIC'], [
            'name' => 'NIC',
            'unique' => false,
        ])
    ->addIndex(['subject'], [
            'name' => 'General_Service_fk1',
            'unique' => false,
        ])
    ->addIndex(['deactivate_type_id'], [
            'name' => 'deactivation_type_id',
            'unique' => false,
        ])
        ->create();

    }

    public function down()
    {
        $this->table('Tmp_General_Service')->drop()->save();   
    }
}
