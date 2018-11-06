<?php
namespace Controllers;

use Models\Designation;

class DesignationController extends ApiController
{
    // $model = new Workplace;
    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->_model = new Designation();
        parent::__construct(); 
    }

}