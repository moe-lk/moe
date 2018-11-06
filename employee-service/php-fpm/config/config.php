<?php

/** Configuration Variables **/
date_default_timezone_set('Asia/Colombo');

define ('DEVELOPMENT_ENVIRONMENT',true);

define('DB_NAME', 'edu');
define('DB_USER', 'devuser');
define('DB_PASSWORD', 'devpass');
define('DB_HOST', 'employee-db');


//JWT Variables
define('IIS', $_SERVER['REMOTE_ADDR']);
define('AUD', $_SERVER['HTTP_HOST']);


$config = array(
    'driver' => 'mysql', // Db driver
    'host' => DB_HOST,
    'database' => DB_NAME,
    'username' => DB_USER,
    'password' => DB_PASSWORD,
    'charset' => 'utf8', // Optional
    'collation' => 'utf8_unicode_ci', // Optional
    'options' => array( // PDO constructor options, optional
        PDO::ATTR_TIMEOUT => 5,
        PDO::ATTR_EMULATE_PREPARES => false,
    ),
);
new \Pixie\Connection('mysql', $config,'QB');
