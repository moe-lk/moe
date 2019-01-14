<?php
namespace Repositories;

use Repositories\Employee;
use Exception;
use Lib\Model;
use Models\Children;
use Models\ContactDetails;
use Models\GeneralService;
use Models\TmpPersonalDetails;
use Models\Qualifications;
use Models\Service;
use Models\Spouse;
use Models\User;
use QB;

class NewEmployee extends Employee
{
    public function __construct()
    {
        $this->person = new TmpPersonalDetails();
        // $this->contact = new ContactDetails();
        // $this->generalService = new GeneralService();
        // $this->currentService = new Service();
        // $this->qualifications = new Qualifications();
        // $this->spouse = new Spouse();
        // $this->children = new Children();
        // $this->user = new User();
        // $this->person->_table = 'Tmp_Personal_Details';
        // $this->contact->_table = 'Tmp_Contact_Details';
        // $this->generalService->_table = 'Tmp_General_Service';
        // $this->currentService->_table = 'Tmp_Service';
        // $this->qualifications->_table = 'Tmp_Qualifications';
        // $this->spouse->_table = 'Tmp_Spouse_Details';
        // $this->children->_table = 'Tmp_Children_Details';
        // $this->user->_table = '';
        // parent::__construct();
    }
}
