<?php
namespace Lib;

/**
 * Controller class
 */
class Controller
{

    protected $_model;
    protected $_controller;
    protected $_action;
    protected $_template;
    /**
     * Parameters from the matched route
     * @var array
     */

    public $_allow = array();
    public $_content_type = "application/json";
    public $_request = array();
    public $_method = "";
    public $_inputs;
    private $_code = 200;

    /**
     * __construct function
     *
     * @param [type] $model
     */
    public function __construct($model)
    {
        $this->_inputs = $this->inputs();
        $this->_model = $model;
        $this->$model = new $model;
    }

    /**
     * get_referer function
     * get HTTP_REFERER from the Server Request
     * @return void
     */
    public function get_referer()
    {
        return $_SERVER['HTTP_REFERER'];
    }

    /**
     * response function
     *
     * Response formatter fuction
     *
     * @param [array] $data
     * @param [integer] $status
     * @param [string] $message
     * @param [integer] $count
     * @return void
     */
    public function response($data, $status, $message, $count = null)
    {
        $this->_code = ($status) ? $status : 200;
        $this->_count = $count;
        $this->set_headers();
        processOutput($data, $message);
        exit;
    }

    /**
     * get_status_message function
     *
     * Set the status message acording to the status code
     *
     * @return void
     */
    private function get_status_message()
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
        return ($status[$this->_code]) ? $status[$this->_code] : $status[500];
    }

    /**
     * get_request_method function
     *
     * Get the REQUEST_METHOD from the Server
     * @return void
     */
    public function get_request_method()
    {
        $this->_method = $_SERVER['REQUEST_METHOD'];
        return $this->_method;
    }

    /**
     * inputs function
     *
     * Formate and custruct the inputs of the request for Controllers
     *
     * @return void [array] requst params
     */
    public function inputs()
    {

        switch ($this->get_request_method()) {
            case "POST":
                $_POST = array_merge($_POST, (array) json_decode(file_get_contents('php://input')));
                $this->_request = $_POST;
                $this->_request = (array) $this->_request;
                break;
            case "GET":
                $_GET = array_merge($_GET, (array) json_decode(file_get_contents('php://input')));
                $this->_request = $_GET;
                $this->_request = (array) $this->_request;
                break;
            case "DELETE":
                parse_str(file_get_contents("php://input"), $this->_request);
                $this->_request = $this->cleanInputs($this->_request);
                break;
            case "PUT":
                $_POST = array_merge($_POST, (array) json_decode(file_get_contents('php://input')));
                $this->_request = $_POST;
                $this->_request = (array) $this->_request;
                break;
            default:
                $this->response('', 406);
                break;
        }
        return $this->_request;
    }

    private function cleanInputs($data)
    {
        $clean_input = array();
        if (is_array($data)) {
            foreach ($data as $k => $v) {
                $clean_input[$k] = $this->cleanInputs($v);
            }
        } else {
            if (get_magic_quotes_gpc()) {
                $data = trim(stripslashes($data));
            }
            $data = strip_tags($data);
            $clean_input = trim($data);
        }

        return $clean_input;
    }

    private function set_headers()
    {
        header("HTTP/1.1 " . $this->_code . " " . $this->get_status_message());
        header("Content-Type:" . $this->_content_type);
        header("X-Total-Count:" . $this->_count);
        header('Access-Control-Expose-Headers:' . 'Content-Length,Content-Range,X-Total-Count');
        header('Access-Control-Allow-Methods:' . 'PUT,POST,GET,DELETE');
    }

}
