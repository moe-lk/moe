<?php

use Phinx\Migration\AbstractMigration;

class AddOwnerNominatorFieldsToPersonalDetails extends AbstractMigration
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
        $table->addColumn('owner', 'integer',['null' => true]);
        $table->addForeignKey('owner', 'Personal_Details','id');
        $table->addColumn('nominators', 'json',['null' => true]);
        $table->update();
    }

    /**
     * Migrate Down.
     */
    public function down()
    {
        $table = $this->table('Personal_Details');
        $table->removeColumn('owner');
        $table->dropForeignKey('owner');
        $table->removeColumn('nominators');
        $table->update();
    }
}
