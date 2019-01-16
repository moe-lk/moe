<?php


use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class CreateQualificationDetailsTmpTable extends AbstractMigration
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

        $this->table("Tmp_Qualifications", [
            'id' => false,
            'primary_key' => ['id'],
            'engine' => 'InnoDB',
            'encoding' => 'utf8',
            'collation' => 'utf8_bin',
            'comment' => '',
            'row_format' => 'Dynamic', ])
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
            ->addColumn('qualification_type_id', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'person_id',
            ])
            ->addColumn('qualification_id', 'integer', [
                'null' => false,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'qualification_type_id',
            ])
            ->addColumn('qualified_date', 'date', [
                'null' => false,
                'after' => 'qualification_id',
            ])
            ->addColumn('qualification_grade', 'string', [
                'null' => false,
                'limit' => 6,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'qualified_date',
            ])
            ->addColumn('qualified_institute', 'string', [
                'null' => true,
                'limit' => 100,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'qualification_grade',
            ])
            ->addColumn('certificate_path', 'string', [
                'null' => true,
                'limit' => 200,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'qualified_institute',
            ])
            ->addIndex(['person_id'], [
                'name' => 'person_id',
                'unique' => false,
            ])
            ->addIndex(['qualification_type_id'], [
                'name' => 'qualification_type_id',
                'unique' => false,
            ])
            ->addIndex(['qualification_id'], [
                'name' => 'qualification_id',
                'unique' => false,
            ])
            ->create();

    }

    public function down()
    {
        $this->table('Tmp_Qualifications')->drop()->save();
    }
}
