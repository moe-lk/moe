<?php
namespace Models;

use Lib\Model;
use PDO;
use QB;

class LetterTemplate extends BaseModel
{
    public function __construct()
    {
        parent::__construct();
        $this->_table = 'Letter_Templates';
        // self::dbAuth();
    }
}
