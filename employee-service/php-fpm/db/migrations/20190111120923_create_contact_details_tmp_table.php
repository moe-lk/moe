<?php

use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class CreateContactDetailsTmpTable extends AbstractMigration
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
        $this->table("Tmp_Contact_Details", [
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
                'null' => false,
                'limit' => 15,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'person_id',
            ])
            ->addColumn('address_type', 'string', [
                'null' => false,
                'limit' => 10,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'NIC',
            ])
            ->addColumn('address_1', 'string', [
                'null' => false,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'address_type',
            ])
            ->addColumn('address_2', 'string', [
                'null' => true,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'address_1',
            ])
            ->addColumn('address_3', 'string', [
                'null' => true,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'address_2',
            ])
            ->addColumn('postal_code', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'address_3',
            ])
            ->addColumn('mobile', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'postal_code',
            ])
            ->addColumn('telephone', 'integer', [
                'null' => true,
                'limit' => MysqlAdapter::INT_REGULAR,
                'precision' => '10',
                'after' => 'mobile',
            ])
            ->addColumn('email', 'string', [
                'null' => true,
                'limit' => 50,
                'collation' => 'utf8_bin',
                'encoding' => 'utf8',
                'after' => 'telephone',
            ])
            ->addIndex(['NIC'], [
                'name' => 'NIC',
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
        $this->table('Tmp_Contact_Details')->drop()->save();
    }
}
