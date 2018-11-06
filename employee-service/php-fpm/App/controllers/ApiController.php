<?php
namespace Controllers;

use Interfaces\ApiInterface;
use Lib\Controller;

class ApiController extends Controller implements ApiInterface
{

    public $_model;

    public function __construct()
    {
    }

    /**
     * Get data by Id function
     *
     * @param [type] $id
     * @return void
     */
    public function get($id)
    {
        try {
            $this->data = $this->_model->find($id);
            if ($this->data != null) {
                $this->response($this->data, 200, 'Success');
            } else {
                $this->response($this->data, 400, 'Employee not found');
            }

        } catch (Exception $e) {
            $this->response($e, 502, 'Server Error');
        }
    }

    public function put()
    {
    }

    public function post()
    {
    }

    public function delete()
    {
    }

    public function listByIds()
    {
        try {
            $user = $this->_model->listByIds($this->_inputs);
            if ($user->results != []) {
                $this->response($user->results, 200, 'Success', $user->count);
            } else {
                $this->response([], 200, 'Data not found');
            }
        } catch (Exception $e) {
            $this->response($e, 400, 'Data not found');
        }

    }

    public function list() {
        try {
            $user = $this->_model->filter($this->_inputs);
            if ($user->results != []) {
                $this->response($user->results, 200, 'Success', $user->count);
            } else {
                $this->response([], 200, 'Data not found');
            }
        } catch (Exception $e) {
            $this->response($e, 400, 'Data not found');
        }

    }

}
