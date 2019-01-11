<?php


use Phinx\Migration\AbstractMigration;

class AddFullNameColumnPersonalDetails extends AbstractMigration
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
        $table = $this->table('Personal_Details');
        $table->addColumn('en_fullname', 'string',['limit'=>150]);
        $table->removeColumn('f_name');
        $table->removeColumn('m_name');
        $table->removeColumn('l_name');                     
        $table->update();
       

    }
    public function down()
    {
        $table = $this->table('Personal_Details');
        $table->removeColumn('en_fullname');
        $table->addColumn('f_name', 'string',['limit'=>50]);
        $table->addColumn('m_name', 'string',['limit'=>50]);
        $table->addColumn('l_name', 'string',['limit'=>50]);
        $table->update();

    }
}

