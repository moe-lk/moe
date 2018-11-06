<?php
namespace Models;

use Exception;
use Lib\Model;
use QB;

class CRUDModel extends BaseModel
{
    protected $personal_details;
    protected $contact_details_temp;
    protected $contact_details_per;
    protected $general_service;
    protected $current_service;
    protected $account_details;
    public $respose;

    public function __construct()
    {
        parent::__construct();
        $this->person = new PersonalDetails();
        $this->contact = new ContactDetails();
        $this->generalService = new GeneralService();
        $this->currentService = new Service();

    }

    public function registerNew($data)
    {
        $this->personal_details = (array) $data->personal_details;
        $this->contact_details_temp = (array) $data->temperary_contact_details;
        $this->contact_details_per = (array) $data->permanent_contact_details;
        $this->general_service = (array) $data->general_service;
        $this->current_service = (array) $data->current_service;
        $this->account_details = (array) $data->account_details;

        $this->current_service['NIC'] = $this->personal_details['NIC'];
        $this->general_service['NIC'] = $this->personal_details['NIC'];
        $this->contact_details_per['NIC'] = $this->personal_details['NIC'];
        $this->contact_details_temp['NIC'] = $this->personal_details['NIC'];

        try {
            QB::transaction(function ($qb) {
                // $this->personModel->save();
                $person_id = $qb->table('Personal_Details')->insert($this->personal_details);
                $this->setPersonId($person_id);
                $qb->table('Contact_Details')->insert($this->contact_details_temp);
                $qb->table('Contact_Details')->insert($this->contact_details_per);
                $qb->table('General_Service')->insert($this->general_service);
                $qb->table('Service')->insert($this->current_service);
                $qb->table('User')->insert($this->account_details);
                $this->respose = 1;
            });
            return 1;
        } catch (Exception $e) {
            log_message('info', $e);
            $qb->rollback();
            exit;
            // to rollback the changes (data would be rejected)
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

        return $this->respose;

    }

    public function updateEmployee($data)
    {
        $this->personal_details = (array) $data->personal_details;
        $this->contact_details_temp = (array) $data->temperary_contact_details;
        $this->contact_details_per = (array) $data->permanent_contact_details;
        $this->general_service = (array) $data->general_service;
        $this->service = (array) $data->current_service;
        $this->account_details = (array) $data->account_details;
        try {
            QB::transaction(function ($qb) {
                $person_id = $qb->table('Personal_Details')->where('ID', $this->personal_details['ID'])->update($this->personal_details);
                // $this->setPersonId($person_id);
                $qb->table('Contact_Details')->where('person_id', $person_id)->update($this->contact_details_temp);
                $qb->table('Contact_Details')->where('person_id', $person_id)->update($this->contact_details_per);
                $qb->table('General_Service')->where('person_id', $person_id)->update($this->general_service);
                $qb->table('Service')->where('person_id', $person_id)->update($this->service);
                $qb->table('User')->where('person_id', $person_id)->update($this->account_details);
                $this->respose = 1;
            });
            return 1;
        } catch (Exception $e) {
            log_message('error', $e);
            $qb->rollback();
            exit;
            // to rollback the changes (data would be rejected)
        }
    }

    protected function setPersonId($person_id)
    {

        $this->contact_details_temp['person_id'] = $person_id;
        $this->contact_details_per['person_id'] = $person_id;
        $this->general_service['person_id'] = $person_id;
        $this->current_service['person_id'] = $person_id;
        $this->account_details['person_id'] = $person_id;
    }

    public function getEmployee($personID)
    {
        try {
            $this->displayData = [];
            $query =
            $this->db::table('Service')
                ->select('*', 'Personal_Details.in_name', 'Service.work_place_id', 'Personal_Details.ID', 'Service.ID') //ta_work_place.work_place AS ta_work_place, si_Work_Place.work_place AS si_work_place
                ->join('Personal_Details', 'Personal_Details.ID', '=', 'Service.person_id')
                ->leftJoin('Main_Office_Branches', 'Service.work_branch_id', '=', 'Main_Office_Branches.ID')
                ->leftJoin('Main_Office_Divisions', 'Service.work_division_id', '=', 'Main_Office_Divisions.ID')
                ->join('Service_Mode', 'Service_Mode.ID', '=', 'Service.service_mode')
                ->join('Work_Place', 'Work_Place.ID', '=', 'Service.work_place_id')
            //$this->db->join('si_Work_Place', 'si_Work_Place.ID = s1.work_place_id');
            //$this->db->join('ta_Work_Place', 'ta_Work_Place.ID = s1.work_place_id', 'left');
            // ->leftJoin('si_Designation', 'si_Designation.ID = s1.designation_id')
                ->where('Personal_Details.ID', '=', $personID)
                ->orderBy('Service.duty_date', 'DESC');
            // ->get();

            $this->personal_details = $this->person->find($personID);
            $this->contact_details_per = $this->contact->select($personID,'permanant');
            $this->contact_details_temp = $this->contact->select($personID,'temp');
            $this->general_service = $this->generalService->findByPerson($personID);
            $this->current_service = $this->currentService->findByPerson($personID);
           
            if ($query->count() >= 1) {

                $this->displayData = $query->get();
                $this->displayData = (array) $this->displayData;
                $i = 0;
                foreach ($this->displayData as $row) {
                    switch ($row->work_place_id) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        case 5:
                        case 6:
                            $this->db->select('province_office');
                            $this->db->from('Province_Offices');
                            $this->db->where('ID', $row['sub_location_id']);
                            $sub_loc_query = $this->db->get();

                            $sub_loc = $sub_loc_query->result_array();
                            if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['province_office'];}

                            break;
                        case 7:
                            $this->db->select('zonal_office');
                            $this->db->from('Zonal_Offices');
                            $this->db->where('ID', $row['sub_location_id']);
                            $sub_loc_query = $this->db->get();

                            $sub_loc = $sub_loc_query->result_array();

                            if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['zonal_office'];}

                            break;
                        case 8:
                            $this->db->select('division_office');
                            $this->db->from('Divisional_Offices');
                            $this->db->where('ID', $row['sub_location_id']);
                            $sub_loc_query = $this->db->get();

                            $sub_loc = $sub_loc_query->result_array();
                            if (isset($sub_loc)) {$res[$i]['sub_location'] = $sub_loc['0']['division_office'];}

                            break;
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                            $sub_loc_query = $this->db::table('Institute')
                                ->select('institute_name')
                                ->where('ID', $row->sub_location_id)
                                ->get();

                            $sub_loc = (array) $sub_loc_query;
                            if (isset($sub_loc)) {
                                $this->displayData[$i]->sub_location  = $sub_loc['0']->institute_name;
                            }
                            break;

                        case 18:
                            $sub_loc_query = $this->db::table('Province_List')
                                ->select('province')
                                ->where('province_id', $row->sub_location_id)
                                ->get();
                                $sub_loc = (array) $sub_loc_query;
                            if (isset($sub_loc)) {
                                $this->displayData[$i]->sub_location = $sub_loc['0']->province;
                            }

                            break;
                    }
                    $i++;
                }
                $response = [
                    'Summery' => $this->displayData[0],
                    'Personal_Details' => $this->personal_details,
                    'General_Service' => $this->general_service,
                    'Current_Service' => $this->current_service,
                    'Permanent_Contact_Details' => $this->contact_details_per,
                    'Temparary_Contact_Details' => $this->contact_details_temp,
                ];
                return $response;
            } else {
                return null;
            }

        } catch (Exception $e) {
            log_message('error', $e);
        }

        // Output Officer details

    }

    public function getEmployeesList($offset = 0)
    {
        $this->personal_details = $this->db::table('Personal_Details')
            ->limit(25)
            ->offset($offset)
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
            log_message('info', json_encode($data));
            $query = $this->db::table('Service')->where('person_id', $data['person_id']);
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
}
