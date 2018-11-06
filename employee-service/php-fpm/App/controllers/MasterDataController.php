<?php
namespace Controllers;

use Models\MasterData;

class MasterDataController extends ApiController
{

    public function __custruct()
    {
    }

    
    public function get($table)
    {
        $this->_inputs = $this->inputs();
        $this->master = new MasterData();
        $this->master->_table = $table;

        if ($this->_inputs != [] && key_exists('id_like', $this->_inputs)) {
            $data = $this->master->find($this->_inputs['id_like']);
        } else {
            try {
                $data = $this->master->select($table);
                $res = [
                    'data' => $data,
                ];
                $this->response($data, 200, 'success');
            } catch (Exception $e) {
                log_message('error', $e);
                $this->response($e, 400, 'error');
            }
        }
    }
}
