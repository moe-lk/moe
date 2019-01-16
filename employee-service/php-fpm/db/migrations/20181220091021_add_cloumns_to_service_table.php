<?php


use Phinx\Migration\AbstractMigration;

class AddCloumnsToServiceTable extends AbstractMigration
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
        $table = $this->table('Service');
        $table->addColumn('psc_letter_no', 'string',['limit'=>15]);
        $table->addColumn('psc_letter_date', 'datetime', ['null' => true]);
        $table->update();
    }

   
    public function down()
    {
        $table = $this->table('Service');
        $table->removeColumn('psc_letter_no');
        $table->removeColumn('psc_letter_date');
        $table->update();
    }

}
