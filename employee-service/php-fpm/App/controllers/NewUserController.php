<?php

namespace Controllers;

use Models\TmpPersonalDetails;
use Repositories\NewEmployee;

class NewUserController extends ApiController
{

    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->_model = new TmpPersonalDetails();
        $this->employee = new NewEmployee();
        parent::__construct();
    }
}
