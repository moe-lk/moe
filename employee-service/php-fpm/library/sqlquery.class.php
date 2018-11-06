<?php
namespace Lib;

use PDO;
class DB extends PDO
{
    protected $_dbHandle;
    protected $_result;
    protected $db;
    protected $transactionCounter = 0; 

    /** Connects to database **/
    public function __construct($dbhost, $dbname, $dbuser = DB_USER, $dbpass = DB_PASSWORD, $dbtype = 'mysql') {
        parent::__construct($dbtype . ':host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASSWORD);
    }


    function __destruct() {
	}


    function beginTransaction() 
    { 
        if(!$this->transactionCounter++) 
            return parent::beginTransaction(); 
       return $this->transactionCounter >= 0; 
    } 

    function commit() 
    { 
       if(!--$this->transactionCounter) 
           return parent::commit(); 
       return $this->transactionCounter >= 0; 
    } 

    function rollback() 
    { 
        if($this->transactionCounter >= 0) 
        { 
            $this->transactionCounter = 0; 
            return parent::rollback(); 
        } 
        $this->transactionCounter = 0; 
        return false; 
    } 

    /** Disconnects from database **/

    public function disconnect()
    {
        if (@mysqli_close($this->_dbHandle) != 0) {
            return 1;
        } else {
            return 0;
        }
    }

    public function selectAll()
    {
        $query = 'select * from `' . $this->_table . '`';
        return $this->query($query);
    }

    public function select($id)
    {
        $query = 'select * from `' . $this->_table . '` where `ID` = \'' . mysqli_real_escape_string($this->db, $id) . '\'';
        return $this->query($query, 1);
    }

    public function insert($table, $data)
    {
        $key = (array_keys($data));
        $val = (array_values($data));
        $form_array = implode("','", $val);
        $db_array = implode(",", $key);
        $form_array = "'".$form_array."'";
        $query = "INSERT INTO $table ($db_array) VALUES ($form_array)";
        $this->db->query($query, 1);
        echo $this->getError(). ' \n' ;
    }

    /** Custom SQL Query **/

    public function query($query, $singleResult = 0)
    {

        $this->_result = $this->query($query,1);
        // var_dump(($this->_result));

        if (preg_match("/select/i", $query)) {
            $result = array();
            $table = array();
            $field = array();
            $tempResults = array();
            $numOfFields = mysqli_num_fields($this->_result);
            for ($i = 0; $i < $numOfFields; ++$i) {
                $table_info = mysqli_fetch_field_direct($this->_result, $i);
                array_push($table, ($table_info->table));
                array_push($field, ($table_info->name));
            }

            while ($row = mysqli_fetch_row($this->_result)) {
                for ($i = 0; $i < $numOfFields; ++$i) {
                    // $table[$i] = trim(ucfirst($table[$i]), "s");
                    $tempResults[$field[$i]] = $row[$i];
                }
                if ($singleResult == 1) {
                    mysqli_free_result($this->_result);
                    return $tempResults;
                }

                array_push($result, $tempResults);
            }

            mysqli_free_result($this->_result);
            return ($result);
        }

    }

    /** Get number of rows **/
    public function getNumRows()
    {
        return mysqli_num_rows($this->_result);
    }

    /** Free resources allocated by a query **/

    public function freeResult()
    {
        mysqli_free_result($this->_result);
    }

    /** Get error string **/

    public function getError()
    {
        return mysqli_error($this->db);
    }
}
