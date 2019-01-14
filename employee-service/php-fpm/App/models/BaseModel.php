<?php
namespace Models;

use Lib\Model;
use QB;
use Lib\Auth;

class BaseModel extends Model
{

    public function __construct()
    {
        parent::__construct();
        $this->user = new Auth();
    }

    public function dbAuth(){
        log_message('info',$this->user->getjti());
        QB::registerEvent('before-select', $this->_table, function ($qb) {
            log_message('info',$this->user->getjti());
            $qb->where('user_updated', '=',$this->user->getjti());
        });
    }

}
