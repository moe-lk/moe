<?php
namespace Controllers;

use Lib\Auth;
use Lib\Controller;
use Models\User;
use Rakit\Validation\Validator;
use Repositories\Employee;

class LoginController extends Controller
{

    public $_inputs;
    private $_auth;
    // protected $_data->passwd;

    public function __construct()
    {
        $this->_auth = new Auth();
        $this->_inputs = $this->inputs();
        $this->User = new User();
        $this->employee = new Employee();
    }

    public function post()
    {
        // log_message('info',json_encode($this->_inputs));
        try {
            $validator = new Validator;

            $validation = $validator->make((array) $this->_inputs, [
                'username' => 'required',
                'password' => 'required',
            ]);

            

            $validation->validate();
            if ($validation->fails()) {
                // handling errors
                $errors = $validation->errors();
                $this->response($errors, 200, 'Login Failed');
                log_message('error',$errors);
                exit;
            } else {
                // validation passes
                $uname = ($this->_inputs['username']);
                $pwd = ($this->_inputs['password']);
                $chk_login = $this->User->check_login($uname, $pwd);
                if ($chk_login == 1) {
                    $data = $this->User->login($uname, $pwd);
                    $auth = new Auth();
                    $token = $this->_auth->IssueToken($data);
                    $result = [
                        "token" => $token,
                        "user"  => $data[0]
                    ];
                    $this->response($result, 200, 'Login Successfull');
                    log_message('error', 'logged');
                } else {
                    $this->response(null, 200, 'Login Failed');
                    log_message('error', 'logged');
                }
            }

        } catch (Exception $e) {
            $this->response($errors, 200, 'Login Failed');
            log_messagge('error',$e);
        }

    }

    public function get(){
        $auth = new Auth();
        $username =  $auth->getjti();
        try{
           $data =  $this->User->getByUsername($username);
           $id = (array)$data[0]->person_id;
           $this->data = $this->employee->getEmployee($id);
           $this->data['Account_Details'] =  $data[0];
           $this->response($this->data,200,'Success');
        }catch(Exception $e){
            $this->response(null,401,'Failed');
        }   
    }

    public function logout()
    {
        $this->_auth->doExpire();
    }
}
