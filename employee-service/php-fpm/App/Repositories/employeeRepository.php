<?php
namespace Repositories;

use Exception;
use Lib\Model;
use Models\Children;
use Models\ContactDetails;
use Models\GeneralService;
use Models\PersonalDetails;
use Models\Qualifications;
use Models\Service;
use Models\Spouse;
use Models\User;
use QB;

class Employee extends Model
{
    protected $personal_details;
    protected $contact_details_temp;
    protected $contact_details_per;
    protected $general_service;
    protected $current_service;
    protected $userAccount;
    protected $children_details;
    protected $spouse_details;
    protected $qualification_details;
    public $respose;

    public function __construct()
    {
        parent::__construct();
        $this->person = new PersonalDetails();
        $this->contact = new ContactDetails();
        $this->generalService = new GeneralService();
        $this->currentService = new Service();
        $this->qualifications = new Qualifications();
        $this->spouse = new Spouse();
        $this->children = new Children();
        $this->user = new User();

    }

    public function saveEmployee($data)
    {
        $this->setEmployee($data);
        $this->setNIC();
        $this->res = 0;
        try {
            QB::transaction(function ($qb) {
                $person_id = $this->person->save();
                $this->setPersonId($person_id);
                if ($this->spouse->_data !== null) {
                    $this->spouse->save();
                }
                if ($this->children->_data !== null) {
                    $this->children->save();
                }
                if ($this->qualifications->_data !== null) {
                    $this->qualifications->save();
                }
                if ($this->contact->_data !== null) {
                    $this->contact->save();
                }
                $this->generalService->save();
                $this->user->save();
                log_message('info', 'QB::transaction commit ' . $person_id . ' Created');
                $this->res = $person_id;
                $qb->commit();

            });
        } catch (Exception $e) {
            log_message('error', $e);
            $qb->rollback();
            exit;
        }

        // try {

        //     if (!$releasement) {
        //         if (!$contact_details_temp) {
        //             $res = 0;
        //             try {
        //                 $this->beginTransaction();
        //                 $this->insert('Personal_Details', $personal_details);
        //                 $this->insert('Contact_Details', $contact_details_per);
        //                 $this->insert('General_Service', $general_service);
        //                 $this->insert('Service', $service);
        //                 $this->insert('User', $userAccount);
        //                 $this->trans_complete();
        //             } catch (Exception $e) {
        //                 $this->trans_rollback();
        //                 $err_message = $this->getError();
        //                 log_message('error', $e->getMessage());
        //             }

        //             return $res;
        //         } else {
        //             $res = 0;
        //             try {
        //                 DB::beginTransaction();
        //                 $q1 = $this->insert('Personal_Details', $personal_details);
        //                 $personId = ($this->db->insert_id);
        //                 $contact_details_temp['person_id'] = $personId;
        //                 $service['person_id'] = $personId;
        //                 $general_service['person_id'] = $personId;
        //                 $userAccount['person_id'] = $personId;

        //                 $q2 = $this->insert('Contact_Details', $contact_details_temp);
        //                 $q3 = $this->insert('General_Service', $general_service);
        //                 $q4 = $this->insert('Service', $service);
        //                 $q5 = $this->insert('User', $userAccount);
        //                 var_dump($q1,$q2,$q3,$q4,$q5);
        //                 DB::commit();
        //             } catch (Exception $e) {
        //                 $this->trans_rollback();
        //                 $err_message = $this->getError();
        //                 log_message('error', $e->getMessage());
        //             }

        //             return $res;

        //         }
        //     } else {
        //         if (!$contact_details_temp) {
        //             $res = 0;
        //             $this->db->trans_start();

        //             $this->db->insert('Personal_Details', $personal_details);
        //             $this->db->insert('Contact_Details', $contact_details_per);
        //             $this->db->insert('General_Service', $general_service);
        //             $this->db->insert('Service', $service);
        //             $this->db->insert('Releasement', $releasement);
        //             $this->db->insert('User', $userAccount);
        //             //user
        //             if ($this->db->trans_status() === true) {
        //                 $res = 1;
        //                 $this->trans_complete();
        //             } else {
        //                 $err_message = $this->db->error();
        //                 log_message('error', $err_message);
        //                 $this->db->trans_complete();
        //             }

        //             return $res;
        //         } else {
        //             $res = 0;
        //             $this->db->trans_start();

        //             $this->db->insert('Personal_Details', $personal_details);
        //             $this->db->insert('Contact_Details', $contact_details_per);
        //             $this->db->insert('General_Service', $general_service);
        //             $this->db->insert('Service', $service);
        //             $this->db->insert('Contact_Details', $contact_details_temp);
        //             $this->db->insert('Releasement', $releasement);
        //             $this->db->insert('User', $userAccount);

        //             if ($this->db->trans_status() === true) {
        //                 $res = 1;
        //                 $this->trans_complete();
        //             } else {
        //                 $err_message = $this->db->error();
        //                 try {
        //                     $this->trans_complete();
        //                 } catch (Exception $e) {
        //                     log_message('error', $e->getMessagge());
        //                 }

        //             }

        //             return $res;

        //         }
        //     }

        // } catch (Exception $e) {
        //     log_message('error', $e->getMessage());
        // }

        return $this->res;

    }

    public function updateEmployee($data)
    {
        $this->setEmployee($data);
        $this->setNIC();
        $this->res = 0;
        try {
            QB::transaction(function ($qb) {
                $person_id = $this->person->update();
                $this->setPersonId($person_id);
                $this->generalService->update();
                if ($this->spouse->_data !== null) {
                    $this->spouse->updateMultiple();
                }
                if ($this->children->_data !== null) {
                    $this->children->updateMultiple();
                }
                if ($this->qualifications->_data !== null) {
                    $this->qualifications->updateMultiple();
                }
                if ($this->contact->_data !== null) {
                    $this->contact->updateMultiple();
                }
                $this->res = $person_id;
                $qb->commit();
            });

            return $this->res;
        } catch (Exception $e) {
            log_message('error', $e);
            $qb->rollback();
            exit;
        }

    }

    private function setEmployee($data)
    {
        $this->person->_data = $data->personal_details;
        $this->contact->_data = $data->contact_details;
        $this->children->_data = $data->children_details;
        $this->qualifications->_data = $data->qualifications;
        $this->spouse->_data = $data->spouse_details;
        $this->generalService->_data = $data->general_service;
        $this->user->_data = $data->account_details;

    }

    private function setNIC()
    {
        $NIC = $this->person->_data->NIC;
        $this->generalService->_data->NIC = $NIC;
        $this->contact->_data = setValues($this->contact->_data, 'NIC', $NIC);
    }

    private function setPersonId($person_id)
    {
        try {
            if ($this->contact->_data !== null) {
                $this->contact->_data = setValues($this->contact->_data, 'person_id', $person_id);
            }
            if ($this->children->_data !== null) {
                $this->children->_data = setValues($this->children->_data, 'person_id', $person_id);
            }
            if ($this->qualifications->_data !== null) {
                $this->qualifications->_data = setValues($this->qualifications->_data, 'person_id', $person_id);
            }
            $this->generalService->_data->person_id = $person_id;
            $this->user->_data['person_id'] = $person_id;
            if ($this->spouse->_data !== null) {
                $this->spouse->_data = setValues($this->spouse->_data, 'person_id', $person_id);
            }

        } catch (Exception $e) {
            throw $e;
            log_message('info', $e);
        }
    }

    public function getEmployee($personID)
    {
        try {
            $this->displayData = [];
            // $query =
            // $this->db::table('Service')
            //     ->select('*', 'Personal_Details.in_name', 'Service.work_place_id', 'Personal_Details.ID', 'Service.ID') //ta_work_place.work_place AS ta_work_place, si_Work_Place.work_place AS si_work_place
            //     ->join('Personal_Details', 'Personal_Details.ID', '=', 'Service.person_id')
            //     ->leftJoin('Main_Office_Branches', 'Service.work_branch_id', '=', 'Main_Office_Branches.ID')
            //     ->leftJoin('Main_Office_Divisions', 'Service.work_division_id', '=', 'Main_Office_Divisions.ID')
            //     ->join('Service_Mode', 'Service_Mode.ID', '=', 'Service.service_mode')
            //     ->join('Work_Place', 'Work_Place.ID', '=', 'Service.work_place_id')
            // //$this->db->join('si_Work_Place', 'si_Work_Place.ID = s1.work_place_id');
            // //$this->db->join('ta_Work_Place', 'ta_Work_Place.ID = s1.work_place_id', 'left');
            // // ->leftJoin('si_Designation', 'si_Designation.ID = s1.designation_id')
            //     ->where('Personal_Details.ID', '=', $personID)
            //     ->orderBy('Service.duty_date', 'DESC');
            // ->get();

            $this->contact_details = $this->contact->findByPerson($personID);
            $this->personal_details = $this->person->find($personID);
            $this->qulification_details = $this->qualifications->findByPerson($personID);
            $this->general_service = $this->generalService->findByPerson($personID);
            $this->general_service = $this->generalService->findByPerson($personID);
            $this->current_service = $this->currentService->findAllByPerson($personID);
            $this->children_details = $this->children->findAllByPerson($personID);
            $this->spouse_details = $this->spouse->findAllByPerson($personID);
            // if ($query->count() >= 1) {

            //     $this->displayData = $query->get();
            //     $this->displayData = (array) $this->displayData;
            //     $i = 0;
            //     foreach ($this->displayData as $row) {
            //         switch ($row->work_place_id) {
            //             case 1:
            //             case 2:
            //             case 3:
            //             case 4:
            //                 break;
            //             case 5:
            //             case 6:
            //                 $sub_loc = $this->db::table('Province_Offices')
            //                 ->select('province_office')
            //                 ->where('id','=',$row['sub_location_id'])
            //                 ->get();
            //                 if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['province_office'];}

            //                 break;
            //             case 7:
            //                 $this->db->select('zonal_office');
            //                 $this->db->from('Zonal_Offices');
            //                 $this->db->where('ID', $row['sub_location_id']);
            //                 $sub_loc_query = $this->db->get();

            //                 $sub_loc = $sub_loc_query->result_array();

            //                 if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['zonal_office'];}

            //                 break;
            //             case 8:
            //                 $this->db->select('division_office');
            //                 $this->db->from('Divisional_Offices');
            //                 $this->db->where('ID', $row['sub_location_id']);
            //                 $sub_loc_query = $this->db->get();

            //                 $sub_loc = $sub_loc_query->result_array();
            //                 if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['division_office'];}

            //                 break;
            //             case 9:
            //             case 10:
            //             case 11:
            //             case 12:
            //             case 13:
            //             case 14:
            //             case 15:
            //             case 16:
            //             case 17:
            //                 $sub_loc_query = $this->db::table('Institute')
            //                     ->select('institute_name')
            //                     ->where('ID', $row->sub_location_id)
            //                     ->get();

            //                 $sub_loc = (array) $sub_loc_query;
            //                 if (isset($sub_loc)) {
            //                     $this->displayData[$i]->sub_location = $sub_loc['0']->institute_name;
            //                 }
            //                 break;

            //             case 18:
            //                 $sub_loc_query = $this->db::table('Province_List')
            //                     ->select('province')
            //                     ->where('province_id', $row->sub_location_id)
            //                     ->get();
            //                 $sub_loc = (array) $sub_loc_query;
            //                 if (isset($sub_loc)) {
            //                     $this->displayData[$i]->sub_location = $sub_loc['0']->province;
            //                 }

            //                 break;
            //         }
            //         $i++;
            //     }
            //     $response =
            //     [
            //         'id' => (int) $personID,
            //         'Summery' => $this->displayData[0],
            //         'Personal_Details' => $this->personal_details,
            //         'General_Service' => $this->general_service,
            //         // 'Current_Service' => $this->current_service,
            //         'Contact_Details' => $this->contact_details,
            //         'Qualifications' => $this->qulification_details,
            //     ];
            //     return $response;
            // } else {
            //     return null;
            // }
            $response =
                [
                'id' => (int) $personID,
                'Personal_Details' => $this->personal_details,
                'General_Service' => $this->general_service,
                'Current_Service' => $this->current_service,
                'Contact_Details' => $this->contact_details,
                'Qualifications' => $this->qulification_details,
                'Spouse_Details' => $this->spouse_details,
                'Children_Details' => $this->children_details,
            ];

            log_message('info', json_encode($response));
            return $response;

        } catch (Exception $e) {
            log_message('error', $e);
        }

        // Output Officer details

    }

    public function filter($filter)
    {
        return $this->person->filter($filter);
    }

    public function count()
    {
        return $this->person->count();
    }
    public function getEmployeesList($end, $order, $sort, $start, $filter)
    {
        // $limit = ($end - $start);
        log_message('info', '$filter' . $filter);
        $start = ($start * 10);
        $end = ($end * 10);
        $filters = str_replace('&', 'and', $filter);
        log_message('info', $filters);
        $this->personal_details = $this->db::table('Personal_Details')
            ->limit($end)
            ->offset($start)
            ->where(QB::raw($filter))
            ->orderBy($sort, $order)
            ->get();
        return $this->personal_details;
    }

    public function approveReject($data)
    {
        try {
            log_message('info', json_encode($data));
            $query = $this->db::table('Personal_Details')->where('ID', $data['ID']);
            // return $query->count();
            // $queryObj = $query->getQuery();
            if ($query->count() == 1) {
                $query->update($data);
                return 1;
            } else {
                return 0;
            }
        } catch (Exception $e) {
            return 0;
            log_message('error', $e);
        }
    }

    public function statusUpdate($data)
    {
        try {
            $this->currentService->_data = $data;
            $res = $this->currentService->update();
            log_message('info', '$res:' . $res);
            return $res;
        } catch (Exception $e) {
            return 0;
            log_message('info', $e);
        }
    }
}
