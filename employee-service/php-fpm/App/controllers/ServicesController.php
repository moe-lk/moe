<?php
namespace Controllers;

use Lib\UniqueRule;
use Models\Service;
use Rakit\Validation\Validator;
use Lib\Auth;

class ServiceController extends ApiController{

    public function __construct(){
        $this->_model = new Service();
        parent::__construct();
        $this->_inputs = $this->inputs();
        $this->user = new Auth();
    }

    public function post()
    {
        $this->setCurrentSerivceDetails();

        try {
            $this->_inputs['user_updated'] =  $this->user->getjti();
            $this->_model->_data = (array) $this->_inputs;
            $this->_model->_data['school_data'] = json_encode( $this->_model->_data['school_data'] );
            $id = $this->_model->save();
            $data = [
                'id' => $id,
            ];
            $this->response($data, 200, 'success');
        } catch (Exception $e) {
            log_message('error',json_encode($e));
            $this->response($e, 502, 'error');
        }

    }

    public function put()
    {
        $this->setCurrentSerivceDetails();
        try {
            $this->_inputs['user_updated'] =  $this->user->getjti();
            $this->_model->_data = (array) $this->_inputs;
            $this->_model->_data['school_data'] = json_encode( $this->_model->_data['school_data'] );
            $id = $this->_model->update();
            $data = [
                'id' => $id,
            ];
            $this->response($data, 200, 'success');
        } catch (Exception $e) {
            log_message('error',json_encode($e));
            $this->response($e, 502, 'error');
        }

    }


    private function setCurrentSerivceDetails()
    {
        try{ 
            $current_service = $this->_inputs;
            $validator = new Validator;
            $validator->addValidator('unique', new UniqueRule());
            (array)$current_service['barcode'] = uniqid();
            $auth = new Auth();
            $username = $auth->getjti();
            $current_service['user_updated'] = $username;
            $validation = $validator->make((array) $current_service, [
                'service_mode' => 'required',
                'service_sector' => 'required',
                'work_place_id' => 'required|numeric',
                'user_updated'  => 'required',
                'sub_location_id' => 'alpha_num',
                'work_branch_id' => 'numeric',
                'work_division_id' => 'numeric',
                'designation_id' => 'required|numeric',
                'appoint_date' => 'required|date:Y-m-d',
                'duty_date' => 'required|date:Y-m-d',
                'off_letter_no' => 'required',
                'psc_letter_no' => 'required',
                'class'=>'alpha',
                'barcode' => [
                    'required', 
                    $validator('unique')->table('Service')->column('barcode')->message('barcode Alredy Registerd'),
                ],
            ]);

            $validation->setAliases([
                'off_letter_no' => 'Offer Letter No',
            ]);

            $validation->validate();

            if ($validation->fails()) {
                $errors = $validation->errors();
                $this->response($errors->firstOfAll(),502,'error');
                // exit;
            } else {
               
                $this->_model->_data = $current_service;
            }


        }catch(Exception $e){
            $this->response($e,502,'error');
            exit;
        }
           
        
    }


    private function getCurrentSerivceDetails()
    {
        return $this->current_service;
    }

}