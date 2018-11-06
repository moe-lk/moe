<?php
namespace Models;

use Lib\Model;

class MasterData extends BaseModel
{

    public function __custruct()
    {
        // self::dbAuth();
    }

    public function select($table)
    {
        log_message('info', $table);
        // $this->_table = $table;
        $this->_data = [];
        switch ($table) {
            case "Sleas_Subject":
                $this->_table = 'Sleas_Subject';
                $this->_data = $this->getAllRecords();
                break;
            case "workbranch":
                $this->_table = 'Main_Office_Branches';
                $this->_data = $this->getAllRecords();
                break;
            case "worklocation":
                $this->_table = 'Main_Office_Branches';
                $this->_data = $this->getAllRecords();
                break;
            case "workplace":
                $this->_table = 'Work_Place';
                $this->_data = $this->getAllRecords();
                break;
            case "release_type":
                $this->_data = $this->getAllRecords('Releasement_Type');
                break;
            case "province":
                $this->_table = 'Province_List';
                $this->_data = $this->getAllRecords();
                break;
            case "designation":
                $this->_table = 'Designation';
                $this->_data = $this->getAllRecords();
                break;
            case "deativate_type":
                $this->_data = $this->getAllRecords('Deactivation_Type');
                break;
            case "disciplinary":
                $this->_data = $this->getAllRecords('Disciplinary_Type');
                break;
            case "district_list":
                $this->_data = $this->getAllRecords('District_List');
                break;
            case "service_mode":
                $this->_data = $this->getAllRecords('Service_Mode');
                break;
            case "deactivation_type":
                $this->_data = $this->getAllRecords('Deactivation_Type');
                break;
            case "disciplinary_type":
                $this->_data = $this->getAllRecords('Disciplinary_Type');
                break;
            case "qtype":
                $this->_data = $this->getAllRecords('Qualification_Type');
                break;
            case "leavetype":
                $this->_data = $this->getAllRecords('Leave_Types');
                break;
            case "qualification":
                $this->_table = 'Qualification_List';
                $this->_data = $this->getAllRecords();
                break;

        }

        return $this->_data;
    }

    public function filter($filter){
        $results = $this->db::table($this->_table)
            ->select('*');
        if (key_exists('_end',$filter)) {
            $results->limit($filter['_end']);
        }
        if (key_exists('_start',$filter)) {
            $results->offset($filter['_start']);
        }
        if (key_exists('filter',$filter)) {
            $filters = explode(',',$filter['filter']);
            $results->where($filters[0],$filters[1],$filters[2]);
            // $results->where($filters);
        }
        if (key_exists('q',$filter) && $filter['q'] !== '' ) {
            // $filters = explode(',',$filter['filter']);
            $results->where('institute_name','LIKE', '%'.$filter['q'].'%');
            // $results->where($filters);
        }
        if (key_exists('work_place',$filter)) {
            $filters = explode(',',$filter['work_place']);
            $results->where($filters[0],$filters[1],$filters[2]);
            // $results->where($filters);
        }
        if (key_exists('province',$filter) && $filter['province'] !== '' ) {
            // $filters = explode(',',$filter['filter']);
            $results->where('province','=',$filter['province'] );
            // $results->where($filters);
        }
        if (key_exists('search',$filter) && $filter['search'] !== '' ) {
            // $filters = explode(',',$filter['filter']);
            $results->where('institute_name','LIKE', '%'.$filter['search'].'%');
            // $results->where($filters);
        }

        return $results->get();
    }
}
