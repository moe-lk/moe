<?php
namespace Models;

use Lib\Model;


class Qualifications extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Qualifications';
        // self::dbAuth();
    }

    public function findByPerson($id)
    {
        $results = $this->db::table($this->_table)
            ->select('*')
            ->where('person_id', '=', $id)
            ->get();
        return $results;
    }

}
