<?php
namespace Controllers;

use Controllers\ApiController;
use Lib\Auth;
use Lib\UniqueRule;
use Models\PersonalDetails;
use Models\Service;
use Rakit\Validation\Validator;
use Repositories\Employee;

class UserController extends ApiController
{
    public $_error = [];
    public $personal_details;
    public $permanent_contact_details;
    public $temperary_contact_details;
    public $account_details;
    public $general_service;
    public $current_service;
    public $children_details;
    public $spouse_details;
    public $qualifications;

    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->employee = new Employee();
        $this->person = new PersonalDetails();
        $this->_service = new Service();
        $this->_model = new PersonalDetails();
        parent::__construct();
    }

    /**
     *
     */
    public function get($id = null)
    {
        $this->data = $this->employee->getEmployee($id);
        if ($this->data != null) {
            $this->response($this->data, 200, 'Success');
        } else {
            $this->response($this->data, 400, 'Employee not found');
        }
    }

    // public function postArray(){
    //     $this->respose([],200,'success');
    // }

    public function post()
    {
        try {
            /**  */
            $res = 0;
            $this->setPersonalDetails();
            $this->setContactDetails();
            $this->setGeneralServiceDetails();
            $this->setQualifications();
            log_message('info', json_encode($this->_inputs));

            $service_id = $this->_service->findLastId() + 1;
            $person_id = $this->person->findLastId() + 1;

            if ($this->_error != []) {
                $this->response($this->_error, 400, 'Registration Failed');
            }

            // switch ($this->general_service->way_join) {
            //     case 1:
            //     case 2:
            //     case 3:
            //         $this->general_service['cadre'] = $cadre;
            //         break;
            //     case 4:
            //         $this->general_service['cadre'] = $cadre_supern;
            //         $this->general_service['grade_join'] = $grade_supern;

            // }
            // switch ($this->general_service->cadre) {
            //     case 'general-carder':
            //         $this->general_service['grade_join'] = $grade_general;
            //         break;
            //     case 'special-carder':
            //         $this->general_service['grade_join'] = $grade_special;
            //         // $this->general_service['subject'] = $special_subject;

            // }

            // if ($this->current_service->service_mode != 1) {
            //     $this->general_service->promotion_date = date("Y-m-d", strtotime($this->current_service->appoint_date));
            // } else {
            //     $this->general_service->promotion_date = date("Y-m-d", strtotime($this->current_service->appoint_date));
            // }

            // //Populate Services Array
            // // $service = $this->_inputs['Current_Service'];
            // // array('person_id' => $person_id, 'ID' => $service_id, 'nic' => $nic, 'service_mode' => $service_mood, 'user_updated' => '$this->session->username');

            // if ($this->current_service->service_mode == 7) {
            //     //releasement
            //     // $service_id_array = $this->Form_data_model->get_recent_service_id();
            //     // $service_id = $service_id_array['0']['ID'] + 1;

            //     // $releasement = array('service_id' => $service_id, 'rel_type_id' => $release_type, 'rel_place_id' => $release_place, 'rel_start_date' => date("y-m-d", strtotime($release_study_st_date)), 'rel_end_date' => date("y-m-d", strtotime($release_study_end_date)), 'rel_designation' => $release_work_designation, 'rel_date' => date("y-m-d", strtotime($release_work_date_assumed)), 'salary_drawn' => $release_salary_drawn, 'rel_institute' => $release_institute_name, 'off_letter_no' => $release_official_letter);
            //     // print_r($releasement);

            // } else {
            //     switch ($this->current_service->work_place_id) {
            //         case 1:
            //         case 2:
            //         case 3:
            //         case 4:
            //             // $this->current_service->work_division_id = $this->current_service->work_division_id;
            //             $this->current_service->work_branch_id = $this->current_service->work_branch_id;
            //             break;
            //         case 5:
            //         case 6:
            //             $this->current_service['sub_location_id'] = $this->current_service['sub_location_id'];
            //             break;
            //         case 7:
            //             $this->current_service['sub_location_id'] = $this->current_service['sub_location_id'];
            //             break;
            //         case 8:
            //             $this->current_service['sub_location_id'] = $this->current_service['sub_location_id'];
            //             break;
            //         case 9:
            //         case 10:
            //         case 11:
            //         case 12:
            //         case 13:
            //         case 14:
            //         case 15:
            //         case 16:
            //         case 17:
            //             $this->current_service['sub_location_id'] = $this->current_service['sub_location_id'];
            //             break;

            //         default:
            //     }
            // }

            switch ($this->_method) {
                case 'PUT':
                    $d = $this->employee->updateEmployee($this);
                    break;

                default:
                    $this->setAccountDetails();
                    $d = $this->employee->saveEmployee($this);
                    # code...
                    break;
            }

            if ($d != 0) {
                $this->_inputs['id'] = $d;
                response($this->_inputs, 200, 'success');
            } else {
                response(null, 400, 'error');
            }

        } catch (Exception $e) {
            $this->response($e, 200, 'success');
            // var_dump($e);
        }

    }

    public function approveReject()
    {
        try {
            $validator = new Validator;

            $validation = $validator->make((array) $this->_inputs, [
                'ID' => 'required|numeric',
                'approved' => 'required|numeric',
            ]);
            $validation->validate();

            if ($validation->fails()) {
                $errors = $validation->errors();
                $this->_error = $errors->firstOfAll();
                $this->response(null, 400, $this->_error);
            } else {
                $this->data = $this->employee->approveReject($this->_inputs);
                if ($this->data == 1) {
                    $this->response($this->_inputs, 200, 'success');
                } else {
                    $this->response($this->data, 400, 'Employee Not Found');
                }
                // $this->account_details->name =  $this->personal_details->f_name .' '.$this->personal_details->l_name;
            }

        } catch (Exception $e) {
            $this->response($this->_error, 400, $e->getMessages());
            exit;
        }
    }

    public function statusUpdate()
    {
        try {
            $validator = new Validator;

            $validation = $validator->make((array) $this->_inputs, [
                'ID' => 'required|numeric',
                'service_status' => 'required|alpha',
            ]);
            $validation->validate();

            if ($validation->fails()) {
                $errors = $validation->errors();
                $this->_error = $errors->firstOfAll();
                $this->response(null, 400, $this->_error);
            } else {
                $this->data = $this->employee->statusUpdate($this->_inputs);
                log_message('info', '$this->data: ' . $this->data);
                if ($this->data == 1) {
                    $this->response($this->_inputs, 200, 'success');
                } else {
                    $this->response($this->data, 400, 'Employee Not Found');
                }
            }

        } catch (Exception $e) {
            $this->response($this->_error, 400, $e->getMessages());
            exit;
        }

    }
    private function setAccountDetails()
    {
        try {

            if (array_key_exists('Account_Details', (array) $this->_inputs)) {
                $account_details = (array) $this->_inputs['Account_Details'];
                $account_details['level'] = 2;
                //  (array) $this->_inputs['Account_Details']->level[0];

                $account_details['user_name'] = substr(str_replace(' ', '', strtolower($this->personal_details->l_name)), 0, 5) . rand(1, 3);
                $account_details['passwd'] = password_hash(randomPassword(), PASSWORD_DEFAULT) ;

                $validator = new Validator;
                $validator->addValidator('unique', new UniqueRule());

                $validation = $validator->make((array) $account_details, [
                    'user_name' => [
                        'required', 'min:4',
                        $validator('unique')->table('User')->column('user_name')->message('Username Alredy Registerd'),
                    ],
                    'passwd' => 'required|min:6',
                ]);
                $validation->validate();

                if ($validation->fails()) {
                    $this->setAccountDetails();
                } else {
                    $this->account_details = $account_details;
                }
            } else {
                $this->_error['Account_Details'] = 'Account_Details Required';
            }

        } catch (Exception $e) {
            $this->response($this->_error, 400, $e->getMessages());
            exit;
        }
    }

    private function getAccountDetails()
    {
        return $this->account_details;
    }

    private function uploadProfilePicture(){}

    private function setPersonalDetails()
    {
        try {
            if (array_key_exists('Personal_Details', (array) $this->_inputs)) {
                $personal_details = $this->_inputs['Personal_Details'];
                $validator = new Validator;
                $validation = $validator->make((array) $personal_details, [
                    'NIC' => 'required|min:9|alpha_num',
                    'title' => 'required',
                    'f_name' => 'required|min:2',
                    'l_name' => 'required|min:2',
                    'm_name' => 'min:2',
                    'in_name' => 'min:2',
                    'si_in_name' => 'min:2',
                    'ta_in_name' => 'min:2',
                    'dob' => 'required|date:Y-d-m',
                    'ethinicity' => 'required|numeric',
                    'gender' => ['required'
                    , $validator('in', ['M', 'F'])],
                    'civil_status' => 'required|numeric',
                ]);
                $validation->setAliases([
                    'f_name' => 'First Name',
                    'l_name' => 'Last Name',
                    'm_name' => 'Middle Name',
                    'in_name' => 'Name with Initial',
                    'si_in_name' => 'Name In Sinhala',
                    'ta_in_name' => 'Name In Tamil',
                    'f_appoint_date' => 'First Appoint Date',
                    'f_appoint_type' => 'First Appoint Type',
                ]);
                $validation->validate();

                if ($validation->fails()) {
                    $errors = $validation->errors();
                    $this->_error['Personal_Details'] = $errors->firstOfAll();
                    // $this->response(null, 400,$this->_error );
                } else {
                    $this->personal_details = $personal_details;
                    $auth = new Auth();
                    $username = $auth->getjti();
                    $username ? null : $username = $this->account_details['user_name'];
                    if ($this->personal_details->civil_status > 1) {
                        $this->setSpouseDetails();
                        $this->setChildrenDetails();
                    }
                    $this->personal_details->user_updated = $username;
                }
            } else {
                $this->_error['Personal_Details'] = 'Personal_Details Required';
            }

        } catch (Exception $e) {
            $this->response($this->_error, 400, $e->getMessages());
            exit;
        }

    }

    private function getPersonalDetails()
    {
        return $this->personal_details;
    }

    private function setContactDetails()
    {
        if (array_key_exists('Contact_Details', (array) $this->_inputs)) {
            $contact_details = $this->_inputs['Contact_Details'];
            $validator = new Validator;
            if (count($contact_details) > 0) {
                foreach ($contact_details as $key => $contact) {
                    $validation = $validator->make((array) $contact, [
                        'address_type' => 'required|alpha_num',
                        'address_1' => 'required',
                        'address_2' => 'required',
                        'address_3' => 'required',
                        'postal_code' => 'required|numeric',
                        'mobile' => 'required|numeric',
                        'telephone' => 'required|numeric',
                        'email' => 'required|email',
                    ]);
                    $validation->setAliases([
                        'address_1' => 'Address Line 1',
                        'address_2' => 'Address Line 2',
                        'address_3' => 'Address Line 3',
                    ]);
                    $validation->validate();

                    if ($validation->fails()) {
                        $errors = $validation->errors();
                        $this->_error['Contact_Details'][$key] = $errors->firstOfAll();
                    } else {
                        $this->contact_details[$key] = (array) $contact;
                    }
                }
            }

        } else {
            $this->_error['Contact_Details'] = 'Contact_Details Required';

        }
    }

    private function getContactDetails()
    {
        return $this->contact_details;
    }

    private function setGeneralServiceDetails()
    {
        if (array_key_exists('General_Service', (array) $this->_inputs)) {
            $general_service = $this->_inputs['General_Service'];
            $validator = new Validator;
            $validation = $validator->make((array) $general_service, [
                'date_join' => 'required|date:Y-m-d',
                // 'way_join' => 'required|numeric',
                'cadre' => ['required'
                    , $validator('in', ['General Cadre', 'Special Cadre'])],
                'grade_join' => 'alpha',
                'entrance_exam_rank' => 'numeric',
                'grade' => 'alpha',
                'subject' => 'numeric|min:1',
                'medium' => 'required|numeric',
                'confirm' => 'required|numeric',
                'confirm_date' => 'date:Y-m-d',
                'promotion_date' => 'date:Y-m-d',
                'f_appoint_date' => 'date:Y-m-d',
                'eb_1_pass' => 'date:Y-m-d',
                'eb_2_pass' => 'date:Y-m-d',
                'eb_3_pass' => 'date:Y-m-d',
                'pg_dip_pass' => 'date:Y-m-d',
                'pg_deg_pass' => 'date:Y-m-d',
                'cb_1_date' => 'date:Y-m-d',
                'cb_2_date' => 'date:Y-m-d',
                'cb_3_date' => 'date:Y-m-d',
                'status' => 'alpha',
                'deactivate_type_id' => 'numeric',
                'deactivate_date' => 'date:Y-m-d',
            ]);

            $validation->setAliases([
                'f_appoint_date' => 'first_appint_date',
                'pg_dip_pass' => 'PG.Dip pass',
                'pg_deg_pass' => 'PG.Deg pass',
            ]);

            $validation->validate();

            if ($validation->fails()) {
                $errors = $validation->errors();
                $this->_error['General_Service'] = $errors->firstOfAll();
            } else {
                $this->general_service = $general_service;
            }
        }
    }

    private function getGeneralServiceDetails()
    {
        return $this->contact_details;
    }

    private function setChildrenDetails()
    {
        if (array_key_exists('Children_Details', (array) $this->_inputs)) {
            $children_details = $this->_inputs['Children_Details'];
            $validator = new Validator;
            if (count($children_details) > 0) {
                foreach ($children_details as $key => $child) {
                    $validation = $validator->make((array) $child, [
                        'name' => 'required',
                        'dob' => 'required|date',
                        'gender' => ['required'
                        , $validator('in', ['M', 'F'])],
                    ]);
                    $validation->validate();

                    if ($validation->fails()) {
                        $errors = $validation->errors();
                        $this->_error['Children_Details'][$key] = $errors->firstOfAll();
                    } else {
                        $this->children_details[$key] = (array) $child;
                    }
                }
            }

        } else {
            $this->_error['Children_Details'] = 'Children Details Required';

        }

    }
    private function setQualifications()
    {
        if (array_key_exists('Qualifications', (array) $this->_inputs)) {
            $qualifications = $this->_inputs['Qualifications'];
            $validator = new Validator;
            if (count($qualifications) > 0) {
                foreach ($qualifications as $key => $qualification) {
                    $validation = $validator->make((array) $qualification, [
                        'qualification_type_id' => 'required|numeric',
                        'qualification_id' => 'required|numeric',
                        'qualified_date' => 'required||date:Y-d-m',
                        'qualification_grade' => 'required',
                        'qualified_institute' => 'required',
                        'certificate_path' => 'url',
                    ]);
                    $validation->validate();

                    if ($validation->fails()) {
                        $errors = $validation->errors();
                        $this->_error['Qualifications'][$key] = $errors->firstOfAll();
                    } else {

                        $this->qualifications[$key] = (array) $qualification;
                    }
                }
            }
        }
    }

    private function getQualifications(){
        return $this->qualifications;
    }

    private function getChildrenDetails()
    {
        return $this->children_details;
    }

    private function setSpouseDetails()
    {
        if (array_key_exists('Spouse_Details', (array) $this->_inputs)) {
            $spouse_details = $this->_inputs['Spouse_Details'];
            $validator = new Validator;
            $validation = $validator->make((array) $spouse_details, [
                'nic' => 'required|min:10|alpha_num',
                'f_name' => 'required|min:2',
                'l_name' => 'required|min:2',
                'm_name' => 'min:2',
                'in_name' => 'min:2',
                'si_in_name' => 'min:2',
                'ta_in_name' => 'min:2',
                'dob' => 'required|date:Y-d-m',
                'ethinicity' => 'required|numeric',
                'gender' => ['required'
                , $validator('in', ['M', 'F'])],
            ]);
            $validation->validate();

            if ($validation->fails()) {
                $errors = $validation->errors();
                $this->_error['Spouse_Details'] = $errors->firstOfAll();
            } else {
                $this->spouse_details = (array) $spouse_details;
            }
        } else {
            $this->_error['Spouse_Details'] = 'Spouse Details Required';
        }
    }

    private function getSpouseDetails()
    {
        return $this->children_details;
    }

    public function put()
    {
        try {

        } catch (Exception $e) {

        }
        # code...
    }

    public function delete(Type $var = null)
    {
        # code...
    }
}
