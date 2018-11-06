<?php
namespace Controllers;

use Models\MasterData;

class OptionsController extends ApiController
{

    public function __custruct()
    {
        // parent::__custruct(odel);

    }

    public function get($options)
    {
        $this->_inputs = $this->inputs();
        $this->master = new MasterData();
        log_message('info', json_encode($this->_inputs));
        if ($this->_inputs != [] && key_exists('table', $this->_inputs)) {
            $this->master->_table = $this->_inputs['table'];
            try {
                $data = $this->master->filter($this->_inputs);
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
