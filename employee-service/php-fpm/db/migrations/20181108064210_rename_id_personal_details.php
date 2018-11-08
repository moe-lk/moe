<?php

use Phinx\Migration\AbstractMigration;

class RenameIdPersonalDetails extends AbstractMigration
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
        $table->renameColumn('ID', 'id');
        $table->update();

        $table2 = $this->table('General_Service');
        $table2->renameColumn('ID', 'id');
        $table2->update();

        $table3 = $this->table('Acting_Permanent');
        $table3->renameColumn('ID', 'id');
        $table3->update();

        $table4 = $this->table('Change_Request');
        $column = $table4->hasColumn('ID');
        if ($column) {
            $table4->renameColumn('ID', 'id');
            $table4->update();
        }

        $table5 = $this->table('Children_Details');
        $column2 = $table5->hasColumn('ID');
        if ($column2) {
            $table5->renameColumn('ID', 'id');
            $table5->update();
        }

        $table6 = $this->table('Contact_Details');
        $table6->renameColumn('ID', 'id');
        $table6->update();

        $table7 = $this->table('Deactivation_Type');
        $column3 = $table7->hasColumn('ID');
        if ($column3) {
            $table7->renameColumn('ID', 'id');
            $table7->update();
        }

        $table8 = $this->table('Designation');
        $column4 = $table8->hasColumn('ID');
        if ($column4) {
            $table8->renameColumn('ID', 'id');
            $table8->update();
        }

        $table9 = $this->table('Disciplinary_Actions');
        $column5 = $table9->hasColumn('ID');
        if ($column5) {
            $table9->renameColumn('ID', 'id');
            $table9->update();
        }

        $table10 = $this->table('Disciplinary_Actions_List');
        $column6 = $table10->hasColumn('ID');
        if ($column6) {
            $table10->renameColumn('ID', 'id');
            $table10->update();
        }

        $table11 = $this->table('Disciplinary_Type');
        $column7 = $table11->hasColumn('ID');
        if ($column7) {
            $table11->renameColumn('ID', 'id');
            $table11->update();
        }

        $table12 = $this->table('District_List');
        $column8 = $table12->hasColumn('ID');
        if ($column8) {
            $table12->renameColumn('ID', 'id');
            $table12->update();

        }

        $table13 = $this->table('Division_List');
        $column9 = $table13->hasColumn('ID');
        if ($column9) {
            $table13->renameColumn('ID', 'id');
            $table13->update();
        }

        $table14 = $this->table('Increment_Details');
        $column10 = $table14->hasColumn('ID');
        if ($column10) {
            $table14->renameColumn('ID', 'id');
            $table14->update();
        }

        $table15 = $this->table('Institute');
        $column11 = $table15->hasColumn('ID');
        if ($column11) {
            $table15->renameColumn('ID', 'id');
            $table15->update();
        }

        $table16 = $this->table('Leave_Types');
        $column12 = $table16->hasColumn('ID');
        if ($column12) {
            $table16->renameColumn('ID', 'id');
            $table16->update();
        }

        $table17 = $this->table('Leaves');
        $column13 = $table17->hasColumn('ID');
        if ($column13) {
            $table17->renameColumn('ID', 'id');
            $table17->update();
        }

        $table18 = $this->table('Letter_Templates');
        $column14 = $table18->hasColumn('ID');
        if ($column14) {
            $table18->renameColumn('ID', 'id');
            $table18->update();
        }

        $table19 = $this->table('Main_Office_Branches');
        $column15 = $table19->hasColumn('ID');
        if ($column15) {
            $table19->renameColumn('ID', 'id');
            $table19->update();
        }

        $table20 = $this->table('Main_Office_Divisions');
        $column16 = $table20->hasColumn('ID');
        if ($column16) {
            $table20->renameColumn('ID', 'id');
            $table20->update();
        }

        $table21 = $this->table('Media');
        $column17 = $table21->hasColumn('ID');
        if ($column17) {
            $table21->renameColumn('ID', 'id');
            $table21->update();
        }

        $table22 = $this->table('Performing_Permanent');
        $column18 = $table22->hasColumn('ID');
        if ($column18) {
            $table22->renameColumn('ID', 'id');
            $table22->update();
        }

        $table23 = $this->table('Province_List');
        $column19 = $table23->hasColumn('ID');
        if ($column19) {
            $table23->renameColumn('ID', 'id');
            $table23->update();
        }

        $table24 = $this->table('Province_Offices');
        $column20 = $table24->hasColumn('ID');
        if ($column20) {
            $table24->renameColumn('ID', 'id');
            $table24->update();
        }

        $table25 = $this->table('Qualification_List');
        $column21 = $table25->hasColumn('ID');
        if ($column21) {
            $table25->renameColumn('ID', 'id');
            $table25->update();
        }

        $table26 = $this->table('Qualification_Subjects');
        $column22 = $table26->hasColumn('ID');
        if ($column22) {
            $table26->renameColumn('ID', 'id');
            $table26->update();
        }

        $table27 = $this->table('Qualification_Type');
        $column23 = $table27->hasColumn('ID');
        if ($column23) {
            $table27->renameColumn('ID', 'id');
            $table27->update();
        }

        $table28 = $this->table('Qualifications');
        $column24 = $table28->hasColumn('ID');
        if ($column24) {
            $table28->renameColumn('ID', 'id');
            $table28->update();
        }

        $table29 = $this->table('Releasement');
        $column25 = $table29->hasColumn('ID');
        if ($column25) {
            $table29->renameColumn('ID', 'id');
            $table29->update();
        }

        $table30 = $this->table('Releasement_Place');
        $column26 = $table30->hasColumn('ID');
        if ($column26) {
            $table30->renameColumn('ID', 'id');
            $table30->update();
        }

        $table31 = $this->table('Releasement_Type');
        $column27 = $table31->hasColumn('ID');
        if ($column27) {
            $table31->renameColumn('ID', 'id');
            $table31->update();
        }

        $table32 = $this->table('Salary');
        $column28 = $table32->hasColumn('ID');
        if ($column28) {
            $table32->renameColumn('ID', 'id');
            $table32->update();
        }

        $table33 = $this->table('Service');
        $column29 = $table33->hasColumn('ID');
        if ($column29) {
            $table33->renameColumn('ID', 'id');
            $table33->update();
        }

        $table34 = $this->table('Service_Mode');
        $column30 = $table34->hasColumn('ID');
        if ($column30) {
            $table34->renameColumn('ID', 'id');
            $table34->update();
        }

        $table35 = $this->table('Sleas_Subject');
        $column31 = $table35->hasColumn('ID');
        if ($column31) {
            $table35->renameColumn('ID', 'id');
            $table35->update();
        }

        $table36 = $this->table('User');
        $column32 = $table36->hasColumn('ID');
        if ($column32) {
            $table36->renameColumn('ID', 'id');
            $table36->update();
        }

        $table37 = $this->table('Work_Place');
        $column33 = $table37->hasColumn('ID');
        if ($column33) {
            $table37->renameColumn('ID', 'id');
            $table37->update();
        }

        $table38 = $this->table('Zonal_Offices');
        $column34 = $table38->hasColumn('ID');
        if ($column34) {
            $table38->renameColumn('ID', 'id');
            $table38->update();
        }

        $table39 = $this->table('Zone_List');
        $column35 = $table39->hasColumn('ID');
        if ($column35) {
            $table39->renameColumn('ID', 'id');
            $table39->update();
        }

        $table40 = $this->table('Divisional_Offices');
        $column36 = $table40->hasColumn('ID');
        if ($column36) {
            $table40->renameColumn('ID', 'id');
            $table40->update();
        }

        $table41 = $this->table('Spouse_Details');
        $column37 = $table41->hasColumn('ID');
        if ($column37) {
            $table41->renameColumn('ID', 'id');
            $table41->update();
        }

    }

    /**
     * Migrate Down.
     */
    public function down()
    {

        $table = $this->table('Personal_Details');
        $table->renameColumn('id', 'ID');
        $table->update();

        $table2 = $this->table('General_Service');
        $table2->renameColumn('id', 'ID');
        $table2->update();

        $table3 = $this->table('Acting_Permanent');
        $table3->renameColumn('id', 'ID');
        $table3->update();

        $table4 = $this->table('Change_Request');
        $column = $table4->hasColumn('id');
        if ($column) {
            $table4->renameColumn('id', 'ID');
            $table4->update();
        }

        $table5 = $this->table('Children_Details');
        $column2 = $table5->hasColumn('id');
        if ($column2) {
            $table5->renameColumn('id', 'ID');
            $table5->update();
        }

        $table6 = $this->table('Contact_Details');
        $table6->renameColumn('id', 'ID');
        $table6->update();

        $table7 = $this->table('Deactivation_Type');
        $column3 = $table7->hasColumn('id');
        if ($column3) {
            $table7->renameColumn('id', 'ID');
            $table7->update();
        }

        $table8 = $this->table('Designation');
        $column4 = $table8->hasColumn('id');
        if ($column4) {
            $table8->renameColumn('id', 'ID');
            $table8->update();
        }

        $table9 = $this->table('Disciplinary_Actions');
        $column5 = $table9->hasColumn('id');
        if ($column5) {
            $table9->renameColumn('id', 'ID');
            $table9->update();
        }

        $table10 = $this->table('Disciplinary_Actions_List');
        $column6 = $table10->hasColumn('id');
        if ($column6) {
            $table10->renameColumn('id', 'ID');
            $table10->update();
        }

        $table11 = $this->table('Disciplinary_Type');
        $column7 = $table11->hasColumn('id');
        if ($column7) {
            $table11->renameColumn('id', 'ID');
            $table11->update();
        }

        $table12 = $this->table('District_List');
        $column8 = $table12->hasColumn('id');
        if ($column8) {
            $table12->renameColumn('id', 'ID');
            $table12->update();

        }

        $table13 = $this->table('Division_List');
        $column9 = $table13->hasColumn('id');
        if ($column9) {
            $table13->renameColumn('id', 'ID');
            $table13->update();
        }

        $table14 = $this->table('Increment_Details');
        $column10 = $table14->hasColumn('id');
        if ($column10) {
            $table14->renameColumn('id', 'ID');
            $table14->update();
        }

        $table15 = $this->table('Institute');
        $column11 = $table15->hasColumn('id');
        if ($column11) {
            $table15->renameColumn('id', 'ID');
            $table15->update();
        }

        $table16 = $this->table('Leave_Types');
        $column12 = $table16->hasColumn('id');
        if ($column12) {
            $table16->renameColumn('id', 'ID');
            $table16->update();
        }

        $table17 = $this->table('Leaves');
        $column13 = $table17->hasColumn('id');
        if ($column13) {
            $table17->renameColumn('id', 'ID');
            $table17->update();
        }

        $table18 = $this->table('Letter_Templates');
        $column14 = $table18->hasColumn('id');
        if ($column14) {
            $table18->renameColumn('id', 'ID');
            $table18->update();
        }

        $table19 = $this->table('Main_Office_Branches');
        $column15 = $table19->hasColumn('id');
        if ($column15) {
            $table19->renameColumn('id', 'ID');
            $table19->update();
        }

        $table20 = $this->table('Main_Office_Divisions');
        $column16 = $table20->hasColumn('id');
        if ($column16) {
            $table20->renameColumn('id', 'ID');
            $table20->update();
        }

        $table21 = $this->table('Media');
        $column17 = $table21->hasColumn('id');
        if ($column17) {
            $table21->renameColumn('id', 'ID');
            $table21->update();
        }

        $table22 = $this->table('Performing_Permanent');
        $column18 = $table22->hasColumn('id');
        if ($column18) {
            $table22->renameColumn('id', 'ID');
            $table22->update();
        }

        $table23 = $this->table('Province_List');
        $column19 = $table23->hasColumn('id');
        if ($column19) {
            $table23->renameColumn('id', 'ID');
            $table23->update();
        }

        $table24 = $this->table('Province_Offices');
        $column20 = $table24->hasColumn('id');
        if ($column20) {
            $table24->renameColumn('id', 'ID');
            $table24->update();
        }

        $table25 = $this->table('Qualification_List');
        $column21 = $table25->hasColumn('id');
        if ($column21) {
            $table25->renameColumn('id', 'ID');
            $table25->update();
        }

        $table26 = $this->table('Qualification_Subjects');
        $column22 = $table26->hasColumn('id');
        if ($column22) {
            $table26->renameColumn('id', 'ID');
            $table26->update();
        }

        $table27 = $this->table('Qualification_Type');
        $column23 = $table27->hasColumn('id');
        if ($column23) {
            $table27->renameColumn('id', 'ID');
            $table27->update();
        }

        $table28 = $this->table('Qualifications');
        $column24 = $table28->hasColumn('id');
        if ($column24) {
            $table28->renameColumn('id', 'ID');
            $table28->update();
        }

        $table29 = $this->table('Releasement');
        $column25 = $table29->hasColumn('id');
        if ($column25) {
            $table29->renameColumn('id', 'ID');
            $table29->update();
        }

        $table30 = $this->table('Releasement_Place');
        $column26 = $table30->hasColumn('id');
        if ($column26) {
            $table30->renameColumn('id', 'ID');
            $table30->update();
        }

        $table31 = $this->table('Releasement_Type');
        $column27 = $table31->hasColumn('id');
        if ($column27) {
            $table31->renameColumn('id', 'ID');
            $table31->update();
        }

        $table32 = $this->table('Salary');
        $column28 = $table32->hasColumn('id');
        if ($column28) {
            $table32->renameColumn('id', 'ID');
            $table32->update();
        }

        $table33 = $this->table('Service');
        $column29 = $table33->hasColumn('id');
        if ($column29) {
            $table33->renameColumn('id', 'ID');
            $table33->update();
        }

        $table34 = $this->table('Service_Mode');
        $column30 = $table34->hasColumn('id');
        if ($column30) {
            $table34->renameColumn('id', 'ID');
            $table34->update();
        }

        $table35 = $this->table('Sleas_Subject');
        $column31 = $table35->hasColumn('id');
        if ($column31) {
            $table35->renameColumn('id', 'ID');
            $table35->update();
        }

        $table36 = $this->table('User');
        $column32 = $table36->hasColumn('id');
        if ($column32) {
            $table36->renameColumn('id', 'ID');
            $table36->update();
        }

        $table37 = $this->table('Work_Place');
        $column33 = $table37->hasColumn('id');
        if ($column33) {
            $table37->renameColumn('id', 'ID');
            $table37->update();
        }

        $table38 = $this->table('Zonal_Offices');
        $column34 = $table38->hasColumn('id');
        if ($column34) {
            $table38->renameColumn('id', 'ID');
            $table38->update();
        }

        $table39 = $this->table('Zone_List');
        $column35 = $table39->hasColumn('id');
        if ($column35) {
            $table39->renameColumn('id', 'ID');
            $table39->update();
        }

        $table40 = $this->table('Divisional_Offices');
        $column36 = $table40->hasColumn('id');
        if ($column36) {
            $table40->renameColumn('id', 'ID');
            $table40->update();
        }

        $table41 = $this->table('Spouse_Details');
        $column37 = $table41->hasColumn('id');
        if ($column37) {
            $table41->renameColumn('id', 'ID');
            $table41->update();
        }

    }
}
