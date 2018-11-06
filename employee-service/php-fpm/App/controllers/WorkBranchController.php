<?php
namespace Controllers;

use Models\WorkBranch;

class WorkBranchController extends ApiController
{
    // $model = new Workplace;
    public function __construct()
    {
        $this->_inputs = $this->inputs();
        $this->_model = new WorkBranch();
        parent::__construct(); 
    }

}