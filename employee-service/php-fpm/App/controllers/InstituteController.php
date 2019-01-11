<?php
namespace Controllers;

use Models\Institute;

class InstituteController extends ApiController
{
    // $model = new Workplace;
    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->_model = new Institute();
        parent::__construct(); 
    }

}