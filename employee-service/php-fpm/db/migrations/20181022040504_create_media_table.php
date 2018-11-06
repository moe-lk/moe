<?php


use Phinx\Migration\AbstractMigration;
use Phinx\Db\Adapter\MysqlAdapter;

class CreateMediaTable extends AbstractMigration
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
        $table = $this->table('Media');
        $table->addColumn('person_id', 'integer');
        $table->addForeignKey('person_id', 'Personal_Details', ['id'],
                            ['constraint' => 'media_id']);
        $table->addColumn('link',   'text', ['limit' => MysqlAdapter::TEXT_LONG]);
        $table->addColumn('type',  'json' );
        $table->addTimeStamps();
        $table->create();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {
        $this->table('Media')->drop()->save();   
    }
}
