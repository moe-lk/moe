<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class ContactDetails extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Contact_Details';
        // $this->_type = $type;
        // self::dbAuth();
    }

    public function select($id){
        $results = QB::table($this->_table)
        ->select('*')
        ->where('person_id','=', $id)
        // ->where('address_type','=', $this->_type)
        ->get();
        return $results;
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
