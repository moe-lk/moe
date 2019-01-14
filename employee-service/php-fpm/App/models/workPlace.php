<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class WorkPlace extends BaseModel
{

    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Work_Place';
    }

}
