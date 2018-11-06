<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class Designation extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Designation';
    }
}
