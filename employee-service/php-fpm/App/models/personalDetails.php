<?php
namespace Models;

use Lib\Model;
use QB;

class PersonalDetails extends BaseModel
{
    public $attributs;

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Personal_Details';
        self::dbAuth();
    }
        // to get the 
    public function filter($filter)
    {
        $results = $this->db::table($this->_table)
            ->select('*');
        if (key_exists('_end', $filter)) {
            $results->limit($filter['_end'] - $filter['_start']);
        }
        if (key_exists('_start', $filter)) {
            $results->offset($filter['_start']);
        } 
        if (key_exists('approved', $filter)) {
            $results->where('approved', $filter['approved']);
        }
        // if (key_exists('user_level', $filter)) {
        //     $results->where('user_level', $filter['user_level']);
        // }
        if (key_exists('f_name', $filter)) {
            $results->where('f_name', 'LIKE', '%' . $filter['f_name'] . '%');
        }
        if (key_exists('m_name', $filter)) {
            $results->where('m_name', 'LIKE', '%' . $filter['m_name'] . '%');
        }
        if (key_exists('f_appoint_date', $filter)) {
            $results->where('f_appoint_date', 'LIKE', '%' . $filter['f_appoint_date'] . '%');
        }
        if (key_exists('id_like', $filter)) {
            $ids = explode('|', $filter['id_like']);
            $results->whereIn('id', $ids);
        }
        if (key_exists('NIC', $filter)) {
            $results->where('NIC', 'LIKE', '%' . $filter['NIC'] . '%');
        }
        if (key_exists('q', $filter) && $filter['q'] !=='') {
            $filters = $filter['q'];
            log_message('info', $filter['q']);
            $results->where(QB::raw("MATCH (f_name,m_name,l_name,in_name) AGAINST ('" . $filters . "' IN NATURAL LANGUAGE MODE)"));
        }
        // $count =
        $this->count = $results->count();
        $this->results = $results->get();

        return $this;
    }

}
