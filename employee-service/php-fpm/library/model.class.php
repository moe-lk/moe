<?php
namespace Lib;

use QB;

class Model extends QB
{
    protected $_model;

    public function __construct()
    {
        $this->db = new QB;
    }

    public function __destruct()
    {
    }

    public function findLastId()
    {
        $results = $this->db::table($this->_table)
            ->select('id')
            ->orderBy('id', 'DESC');
        if ($results->count() > 0) {
            return $results->first()->id;
        } else {
            return 0;
        }

    }

    public function find($id)
    {
        $row = $this->db::table($this->_table)->find($id);
        return $row;
    }

    public function count()
    {
        $row = $this->db::table($this->_table)->count();
        return $row;
    }

    public function getAllRecords()
    {
        $row = $this->db::table($this->_table)->get();
        return $row;
    }

    /**
     * findByPerson function
     *
     * find data from the db by person_id
     *
     * @param integer $id
     * @return void
     */
    public function findByPerson(int $id)
    {
        $results = $this->db::table($this->_table)
            ->select('*')
            ->where('person_id', '=', $id)
            ->first();
        return $results;
    }

    /**
     * findByPerson function
     *
     * find data from the db by person_id
     *
     * @param integer $id
     * @return void
     */
    public function findAllByPerson(int $id)
    {
        $results = $this->db::table($this->_table)
            ->select('*')
            ->where('person_id', '=', $id)
            ->get();
        return $results;
    }

    /**
     * save function
     *
     * save data from the models to the DB
     *
     * @return void
     */
    public function save()
    {
        log_message('info', $this->_table . ' :Insert ' . json_encode($this->_data));
        try {
            $row = $this->db::table($this->_table)
                ->insert((array) $this->_data);

            return $row;
        } catch (Exception $e) {
            // throw ($e);
            log_message('error', $e);
        }

    }

    /**
     * listByIds function
     *
     * List the collection of data by id
     *
     * @param array $filter
     * @return void
     */
    public function listByIds(array $filter)
    {
        $results = $this->db::table($this->_table)
            ->select('*');
        if (key_exists('id_like', $filter)) {
            $ids = explode('|', $filter['id_like']);
            $results->whereIn('id', $ids);
        }

        if (key_exists('_end', $filter)) {
            $results->limit($filter['_end']);
        }
        if (key_exists('_start', $filter)) {
            $results->offset($filter['_start']);
        }
        $this->count = $results->count();
        $this->results = $results->get();

        return $this;
    }

    /**
     * filter function
     *
     * @param array $filter
     * @return void
     */
    public function filter(array $filter)
    {
        log_message('info', '$this->_table ' . $this->_table);
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
        $this->results = $results->get();
        $this->count = $results->count();
        return $this;
    }

    public function update()
    {
        try {
            $row = 0;
            log_message('info','update====: '.json_encode($this->_data));
            $array = (array) $this->_data;
            if (isset($array['id'])) {
                $query = $this->db::table($this->_table)
                    ->where('id', '=', $array['id'])
                    ->update((array) $array);
                return $array['id'];
            } else {
                $row = $this->save();
                return $row;
            }

        } catch (Exception $e) {
            throw ($e);
            log_message('info', $e);
        }

    }

    public function updateMultiple()
    {
        
        foreach ((array) $this->_data as $key => $value) {
            log_message('info',json_encode(array_key_exists('id', $value)));
            if (array_key_exists('id', $value)) {
                $this->_data = $value;
                $this->update();
            }else{
                $this->_data = $value;
                $this->save();
            }
        }
    }

}
