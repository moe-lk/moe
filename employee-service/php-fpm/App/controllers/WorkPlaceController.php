<?php
namespace Controllers;

use Models\WorkPlace;

class WorkPlaceController extends ApiController
{
    // $model = new Workplace;
    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->_model = new WorkPlace();
        parent::__construct(); 
    }

}