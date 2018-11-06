<?php

/**
 * Get header Authorization
 * */
function getAuthorizationHeader()
{
    $headers = null;
    if (isset($_SERVER['Authorization'])) {
        $headers = trim($_SERVER["Authorization"]);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) { //Nginx or fast CGI
        $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } elseif (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
        $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
        //print_r($requestHeaders);
        if (isset($requestHeaders['Authorization'])) {
            $headers = trim($requestHeaders['Authorization']);
        }
    }
    return $headers;
}

function setValues(array $array,$key,$value){
    log_message('info','$key=========== :'.$key);
    $respose = [];
    foreach($array as $val){
        $val[$key] = $value;
        $respose[] = $val;
    }
    return $respose;
}

/**
 * get access token from header
 * */
function getBearerToken()
{
    $headers = getAuthorizationHeader();
// HEADER: Get the access token from the header
    if (!empty($headers)) {
        if (preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
            return $matches[1];
        }
    }
    return null;
}

function getPerameter($peram = null)
{
    return xss_clean($_REQUEST[$peram]);
}

/* This function will return the name string of the function that called $function. To return the
caller of your function, either call get_caller(), or get_caller(__FUNCTION__).
 */
function get_caller($function = null, $use_stack = null)
{
    if (is_array($use_stack)) {
        // If a function stack has been provided, used that.
        $stack = $use_stack;
    } else {
        // Otherwise create a fresh one.
        $stack = debug_backtrace();
        // echo "\nPrintout of Function Stack: \n\n";
        // print_r($stack);
        // echo "\n";
    }

    if ($function == null) {
        // We need $function to be a function name to retrieve its caller. If it is omitted, then
        // we need to first find what function called get_caller(), and substitute that as the
        // default $function. Remember that invoking get_caller() recursively will add another
        // instance of it to the function stack, so tell get_caller() to use the current stack.
        $function = get_caller(__FUNCTION__, $stack);
    }

    if (is_string($function) && $function != "") {
        // If we are given a function name as a string, go through the function stack and find
        // it's caller.
        for ($i = 0; $i < count($stack); $i++) {
            $curr_function = $stack[$i];
            // Make sure that a caller exists, a function being called within the main script
            // won't have a caller.
            if ($curr_function["function"] == $function && ($i + 1) < count($stack)) {
                return $stack[$i + 1]["function"];
            }
        }
    }

    // At this stage, no caller has been found, bummer.
    return "";
}

function processInput($uri)
{
    $uri = implode('/',
        array_slice(
            explode('/', $_SERVER['REQUEST_URI']), 3));

    return $uri;
}

function processOutput($data = null, $message)
{
    $respose = [
        "data" => $data,
        "message" => $message,
    ];
    echo (json_encode($data));
}

function log_message($type, $message)
{
    // chmod('Log', 0777);
    $errBase = 'Log/error/';
    if (!is_dir($errBase)) {
        mkdir($errBase, 0777, true);
    }

    $infoBase = 'Log/info';
    if (!is_dir($infoBase)) {
        mkdir($infoBase, 0777, true);
    }
    $newerror = 'Log/error/' . date("Y-m-d");
    $newInfo = 'Log/info/' . date("Y-m-d");
    switch ($type) {
        case ('error'):
            $myfile = fopen($newerror, !file_exists($newerror) ? 'w' : 'a');
            fwrite($myfile,  date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']).' :'. $message . "\n");
            fclose($myfile);
            break;
        // error_log($message, 3, $fh) or die("Can't create file");
        case ('info'):
            $myfile = fopen($newInfo, !file_exists($newInfo) ? 'w' : 'a');
            fwrite($myfile,  date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']).' :'. $message . "\n");
            fclose($myfile);
            break;

    }
}
function jsonDecode($json, $assoc = false)
{
    $ret = json_decode($json, $assoc);
    if ($error = json_last_error()) {
        $errorReference = [
            JSON_ERROR_DEPTH => 'The maximum stack depth has been exceeded.',
            JSON_ERROR_STATE_MISMATCH => 'Invalid or malformed JSON.',
            JSON_ERROR_CTRL_CHAR => 'Control character error, possibly incorrectly encoded.',
            JSON_ERROR_SYNTAX => 'Syntax error.',
            JSON_ERROR_UTF8 => 'Malformed UTF-8 characters, possibly incorrectly encoded.',
            JSON_ERROR_RECURSION => 'One or more recursive references in the value to be encoded.',
            JSON_ERROR_INF_OR_NAN => 'One or more NAN or INF values in the value to be encoded.',
            JSON_ERROR_UNSUPPORTED_TYPE => 'A value of a type that cannot be encoded was given.',
        ];
        $errStr = isset($errorReference[$error]) ? $errorReference[$error] : "Unknown error ($error)";
        log_message('error',$errBase);
        throw new \Exception("JSON decode error ($error): $errStr");
    }
    return $ret;
}

function response($data, $status, $message)
{
    $_code = ($status) ? $status : 200;

    $_status = get_status_message($status, $_code);
    set_headers($_code, $_status);
    processOutput($data, $_status);
    exit;
}

function get_status_message($_status, $_code)
{
    $status = array(
        100 => 'Continue',
        101 => 'Switching Protocols',
        200 => 'OK',
        201 => 'Created',
        202 => 'Accepted',
        203 => 'Non-Authoritative Information',
        204 => 'No Content',
        205 => 'Reset Content',
        206 => 'Partial Content',
        300 => 'Multiple Choices',
        301 => 'Moved Permanently',
        302 => 'Found',
        303 => 'See Other',
        304 => 'Not Modified',
        305 => 'Use Proxy',
        306 => '(Unused)',
        307 => 'Temporary Redirect',
        400 => 'Bad Request',
        401 => 'Unauthorized',
        402 => 'Payment Required',
        403 => 'Forbidden',
        404 => 'Not Found',
        405 => 'Method Not Allowed',
        406 => 'Not Acceptable',
        407 => 'Proxy Authentication Required',
        408 => 'Request Timeout',
        409 => 'Conflict',
        410 => 'Gone',
        411 => 'Length Required',
        412 => 'Precondition Failed',
        413 => 'Request Entity Too Large',
        414 => 'Request-URI Too Long',
        415 => 'Unsupported Media Type',
        416 => 'Requested Range Not Satisfiable',
        417 => 'Expectation Failed',
        500 => 'Internal Server Error',
        501 => 'Not Implemented',
        502 => 'Bad Gateway',
        503 => 'Service Unavailable',
        504 => 'Gateway Timeout',
        505 => 'HTTP Version Not Supported');
    return ($status[$_code]) ? $status[$_code] : $status[500];
}


function randomPassword ( $length = 8 ) 
{	// start with a blank password	
    $password = "";	
    // define possible characters	
    $possible = "0123456789abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*";	
    // set up a counter	
    $i = 0;	
    // add random characters to $password until $length is reached	
    while ($i < $length) {	
        // pick a random character from the possible ones	
        $char = substr($possible, mt_rand(0, strlen($possible)-1), 1);	
        // we don’t want this character if it’s already in the password	
        if (!strstr($password, $char)) {	$password .= $char;	$i++;	}	
    }	// done!	
    return $password;	
}
// function randomPassword() {
//     $alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
//     for ($i = 0; $i < 8; $i++) {
//         $n = rand(0, strlen($alphabet)-1);
//         $pass[$i] = $alphabet[$n];
//     }
//     return $pass;
// }

function set_headers($_code, $_status)
{
    header("HTTP/1.1 " . $_code . " " . $_status);
    header("Content-Type" . "application/json");
    // header("X-Total-Count", $count);
    header('Access-Control-Expose-Headers:' .'Content-Length,Content-Range,X-Total-Count');
}


