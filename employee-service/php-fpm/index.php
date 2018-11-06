<?php	
error_reporting(-1); // reports all errors
ini_set("display_errors", "1"); // shows all errors

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)). DS .'html'. DS );

require_once (ROOT . DS . 'vendor' . DS . 'autoload.php');
require_once (ROOT . DS . 'library' . DS . 'bootstrap.php');


include 'App/routes/index.php';


   

