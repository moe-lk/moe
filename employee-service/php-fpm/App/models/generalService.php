<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class GeneralService extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'General_Service';
        // self::dbAuth();
    }

  
}
