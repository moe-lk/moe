<?php


use Phinx\Migration\AbstractMigration;

class AddNewColomns extends AbstractMigration
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
        //add class column to general servie table
        $table = $this->table('General_Service');
        $table->addColumn('class', 'integer');
        $table->update();

        //add religion column to personal details table
        $table1 = $this->table('Personal_Details');
        $table1->addColumn('religion', 'string',['limit'=>10]);
        $table1->update();

        //add religion column to spouse details table
        $table2 = $this->table('Spouse_Details');
        $table2->addColumn('religion', 'string',['limit'=>10]);
        $table2->update();

        //add present class column to service table
        $table4 = $this->table('Service');
        $table4->addColumn('class', 'integer');
        $table4->update();
    }

    public function down()
    {
        $table = $this->table('General_Service');
        $table->removeColumn('class');
        $table->update();

        $table1 = $this->table('Personal_Details');
        $table1->removeColumn('religion');
        $table1->update();

        $table2 = $this->table('Spouse_Details');
        $table2->removeColumn('religion');
        $table2->update();

        $table3 = $this->table('Service');
        $table3->removeColumn('class');
        $table3->update();

    }
}
