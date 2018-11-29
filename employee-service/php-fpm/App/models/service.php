<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class Service extends BaseModel
{

    public function __construct()
    {
        $this->_table = 'Service';
        parent::__construct();
        self::dbAuth();
    }
    

    /**
     * filter function
     *
     * @param array $filter
     * @return void
     */
    public function filter(array $filter)
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

        if (key_exists('service_mode', $filter)) {
            $results->where('service_mode', '=', $filter['service_mode']);
        }
        if (key_exists('appoint_date', $filter)) {
            $results->where('appoint_date', '=', $filter['appoint_date']);
        }

        $this->count = $results->count();
        $this->results = $results->get();

        return $this;

    }
}
