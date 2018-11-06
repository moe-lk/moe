<?php
namespace Lib;

use QB;
use Rakit\Validation\Rule;

class UniqueRule extends Rule
{

    protected $message = ":attribute :value has been used";

    protected $fillable_params = ['table', 'column', 'except'];

    // protected $pdo;

    public function __construct()
    {
        // $this->pdo = $pdo;
    }

    public function table($table)
    {
        $this->params['table'] = $table;
        return $this;
    }
    
    public function column($column)
    {
        $this->params['column'] = $column;
        return $this;
    }
    
    public function except($value)
    {
        $this->params['except'] = $value;
        return $this;
    }

    public function check($value)
    {
        // make sure required parameters exists
        $this->requireParameters(['table', 'column']);

        // getting parameters
        $column = $this->parameter('column');
        $table = $this->parameter('table');
        $except = $this->parameter('except');

        if ($except and $except == $value) {
            return true;
        }

        // do query
          //TODO: after update count not returning "usmanhalalit/pixie": "2.*@dev", => stable
        $count = QB::table($table)
            ->where($column, $value)
            ->count();

        // true for valid, false for invalid
        return intval($count) === 0;
    }
}
