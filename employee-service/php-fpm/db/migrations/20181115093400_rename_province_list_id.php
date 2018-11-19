<?php


use Phinx\Migration\AbstractMigration;

class RenameProvinceListId extends AbstractMigration
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
        $table = $this->table('Province_List');
        $column = $table->hasColumn('province_id');
        if ($column) {
            $table->renameColumn('province_id', 'id');
            $table->update();
        }

        $table2 = $this->table('District_List');
        $column2 = $table2->hasColumn('dist_id');
        if ($column2) {
            $table2->renameColumn('dist_id', 'id');
            $table2->update();
        }
    }

    public function down()
    {
        $table = $this->table('Province_List');
        $column = $table->hasColumn('province_id');
        if ($column) {
            $table->renameColumn('id', 'province_id');
            $table->update();
        }

        $table2 = $this->table('District_List');
        $column2 = $table2->hasColumn('dist_id');
        if ($column2) {
            $table2->renameColumn('id', 'dist_id');
            $table2->update();
        }
    }
}
