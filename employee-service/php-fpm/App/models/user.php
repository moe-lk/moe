<?php
namespace Models;

use Lib\Model;
use QB;

class User extends BaseModel
{

    protected $passwd;
    private $level;
    protected $_mysqli;

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'User';
    }

    public function getById($id)
    {
        $results = QB::table($this->_table)
            ->select('ID', 'name', 'user_name', 'level', 'workplace_id', 'sub_location_id', 'person_id')
            ->where('ID', '=', $id)
            ->get();
        return $results;
    }

    public function getByUsername($username)
    {
        $results = QB::table($this->_table)
            ->select('ID', 'name', 'user_name', 'level', 'workplace_id', 'sub_location_id', 'person_id')
            ->where('user_name', '=', $username)
            ->get();
        return $results;
    }

    public function check_login($uname, $pwd)
    {
        $results = QB::table($this->_table)
            ->where('user_name', '=', $uname)
            ->where('passwd', '=', $pwd)
            ->count();
        return $results;
    }

    public function login($uname, $pwd)
    {
        $results = QB::table($this->_table)
            ->where('user_name', '=', $uname, 'passwd', '=', $pwd)
            ->get();
        return $results;
    }

    public function filter($filter)
    {
        $results = $this->db::table($this->_table)
            ->select('*');
        if (key_exists('_end', $filter)) {
            $results->limit($filter['_end']);
        }
        if (key_exists('_start', $filter)) {
            $results->offset($filter['_start']);
        }
        if (key_exists('filter', $filter)) {
            $filters = explode(',', $filter['filter']);
            $results->where($filters[0], $filters[1], $filters[2]);
        }
        if (key_exists('q', $filter)) {
            log_message('info','$filters'.$filters['q']);
            $filters =($filter['q']);
            $results->where(QB::raw('MATCH (*) AGAINST('.$filters.')'));
        }
        return $results->get();

    }

}
