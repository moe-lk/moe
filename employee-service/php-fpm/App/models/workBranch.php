<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class WorkBranch extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Main_Office_Branches';
    }
}
