<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\Psr7\Response;
use PHPUnit\Framework\TestCase;

class UserControllerTest extends TestCase
{

    protected $client;
    protected $token;

    protected function setUp()
    {
        $token = fopen('Tests/token', 'r');
        $this->client = new Client([
            'request.options' => [
                'exceptions' => false,
            ],
            'base_uri' => 'http://localhost',
            'headers' => [
                'User-Agent' => 'testing/1.0',
                'Accept' => 'application/json',
                'X-Foo' => ['Bar', 'Baz'],
                'Authorization' => fread($token, filesize("Tests/token")),
            ],
        ]);
    }

    public function testPost_User_Login()
    {
        echo 'testPost_User_Login=================\n ';
        $requestBody = [
            'username' => 'piumi2',
            'password' => 'piumi7',
        ];
        $response = $this->client->post('/v2/user/login', [
            'json' => ($requestBody),
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $myfile = fopen('token', 'w');
        fwrite($myfile, $data['data']['token']);
        $this->assertEquals('Login Successfull', $data['message']);
    }

    public function testCreatesClientErrorResponseException()
    {
        $e = RequestException::create(new Request('POST', '/v2/user/login'), new Response(401));
        $this->assertContains(
            'POST /v2/user/login',
            $e->getMessage()
        );
        $this->assertContains(
            '401 Unauthorized',
            $e->getMessage()
        );
        $this->assertInstanceOf('GuzzleHttp\Exception\ClientException', $e);
    }

    public function testPost_User_Login_Incorrect_Password()
    {
        $requestBody = [
            'username' => 'subc2',
            'password' => 'sub',
        ];
        $response = $this->client->post('/v2/user/login', [
            'json' => ($requestBody),
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertSame(null, $data['data']);
        $this->assertEquals('Login Failed', $data['message']);
    }

    public function testPost_User_Login_Empty_User_Pass()
    {
        $requestBody = [
            'username' => '',
            'password' => '',
        ];
        $response = $this->client->post('/v2/user/login', [
            'json' => $requestBody,
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertEquals('Login Failed', $data['message']);
    }

    public function testGet_User_Info()
    {
        $response = $this->client->get('/v2/employee/2');
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertSame([], $data['data']);

    }

    public function testPost_Register_User()
    {
        echo 'testPost_Register_User=================\n ';
        $requestBody = [
            'Account_Details' => [
                'id' => 0,
                'user_name' => 'user1',
                'passwd' => '123456',
                'level' => 'string',
                'workplace_id' => 0,
                'sub_location_id' => 2,
                'person_id' => 0,
            ],
            'Personal_Details' => [
                'ID' => 0,
                'NIC' => '123456789V',
                'title' => 'Rev',
                'f_name' => 'Rathnayaka Mudalige',
                'l_name' => 'Rathnayaka',
                'm_name' => 'Pajapathi Dananjana',
                'in_name' => 'R.M.P.M.Rathnayaka',
                'si_in_name' => 'ආර්. එම්. පී. එම්. රත්නායක',
                'ta_in_name' => 'ஆர்.எம்.பி.எம்.ரத்நாயக்க',
                'dob' => '1963-09-19',
                'ethinicity' => 'Sinhala',
                'gender' => 'Male',
                'civil_status' => 'Married',
                'f_appoint_data' => '2012-12-12',
                'f_appoint_type' => 'Permanant',
                'active' => 1,
                'profile_pic' => 'string',
                'user_updated' => 'user1',
            ],
            'Permanent_Contact_Details' => [
                'ID' => 0,
                'address_type' => 'Permanant',
                'address_1' => '50/A/11 6th lane',
                'address_2' => 'Hansagiri Road',
                'address_3' => 'Gampaha',
                'postal_code' => 8600,
                'mobile' => 1234567890,
                'telephone' => 1234567890,
                'email' => 'user@example.com',
            ],
            'Temparary_Contact_Details' => [
                'ID' => 0,
                'address_type' => 'Permanant',
                'address_1' => '50/A/11 6th lane',
                'address_2' => 'Hansagiri Road',
                'address_3' => 'Gampaha',
                'postal_code' => 8600,
                'mobile' => 1234567890,
                'telephone' => 1234567890,
                'email' => 'user@example.com',
            ],
            'General_Service' => [
                'ID' => 0,
                'date_join' => '2016-01-12',
                'way_join' => 'Open',
                'cadre' => 'General Cadre',
                'grade_join' => 'Special',
                'entrance_exam_rank' => 0,
                'grade' => 'Special',
                'subject' => 1,
                'medium' => 'Sinhala',
                'confirm' => 'Yes',
                'confirm_date' => '2012-12-12',
                'promotion_date' => '2013-12-12',
                'f_appoint_date' => '2011-12-12',
                'eb_1_pass' => '2013-12-12',
                'eb_2_pass' => '2014-12-12',
                'eb_3_pass' => '2015-12-12',
                'pg_dip_pass' => '2009-10-12',
                'pg_deg_pass' => '2010-08-12',
                'cb_1_date' => '2014-08-12',
                'cb_2_date' => '2015-08-12',
                'cb_3_date' => '2014-08-12',
                'status' => 'Active',
                'deactivate_type_id' => 0,
                'deactivate_date' => '2018-08-12',
            ],
            'Current_Service' => [
                'ID' => 0,
                'person_id' => 0,
                'servics_sector' => 'sleas',
                'service_mode' => 'First appointment',
                'service_status' => 'First appointment',
                'work_place_id' => 1,
                'sub_location_id' => 2,
                'work_branch_id' => 1,
                'work_division_id' => 1,
                'designation_id' => 1,
                'appoint_date' => '2012-05-08',
                'duty_date' => '2012-05-08',
                'duty_date_terminate' => '2011-05-08',
                'off_letter_no' => 'ED/4/58/25/3/G/',
                'grade' => 'Special',
                'date_promoted' => '2011-05-08',
                'salary_drawned' => 'string',
                'barcode' => 54456445664,
                'user_updated' => 'user1',
            ],
        ];
        $response = $this->client->post('/v2/user/register', [
            'json' => $requestBody,
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
    }

    // public function testCreatesGenerateException()
    // {
    //     $e = RequestException::create(new Request('POST', '/v2/user/register', []));
    //     $this->assertEquals('Error completing request', $e->getMessage());
    //     $this->assertInstanceOf('GuzzleHttp\Exception\RequestException', $e);
    // }

    // public function testCreatesClientErrorResponseException()
    // {
    //     $e = RequestException::create(new Request('POST', '/v2/user/register', []), new Response(400));
    //     $this->assertContains(
    //         'POST /v2/user/register',
    //         $e->getMessage()
    //     );
    //     $this->assertContains(
    //         '400 Bad Request',
    //         $e->getMessage()
    //     );
    //     $this->assertInstanceOf('GuzzleHttp\Exception\ClientException', $e);
    // }

    // public function testCreatesServerErrorResponseException()
    // {
    //     $e = RequestException::create(new Request('POST', '/v2/user/register', []), new Response(500));
    //     $this->assertContains(
    //         'POST /v2/user/register',
    //         $e->getMessage()
    //     );
    //     $this->assertContains(
    //         '500 Internal Server Error',
    //         $e->getMessage()
    //     );
    //     $this->assertInstanceOf('GuzzleHttp\Exception\ServerException', $e);
    // }

    // public function testCreatesGenericErrorResponseException()
    // {
    //     $e = RequestException::create(new Request('POST', '/v2/user/register', []), new Response(600));
    //     $this->assertContains(
    //         'POST /v2/user/register',
    //         $e->getMessage()
    //     );
    //     $this->assertContains(
    //         '600 ',
    //         $e->getMessage()
    //     );
    //     $this->assertInstanceOf('GuzzleHttp\Exception\RequestException', $e);
    // }

    // public function dataPrintableResponses()
    // {
    //     return [
    //         ['You broke the test!'],
    //         ['<h1>zlomený zkouška</h1>'],
    //         ['{"tester": "Philépe Gonzalez"}'],
    //         ["<xml>\n\t<text>Your friendly test</text>\n</xml>"],
    //         ['document.body.write("here comes a test");'],
    //         ["body:before {\n\tcontent: 'test style';\n}"],
    //     ];
    // }

    // /**
    //  * @dataProvider dataPrintableResponses
    //  */
    // public function testCreatesExceptionWithPrintableBodySummary($content)
    // {
    //     $response = new Response(
    //         500,
    //         [],
    //         $content
    //     );
    //     $e = RequestException::create(new Request('POST', '/v2/user/register'), $response);
    //     $this->assertContains(
    //         $content,
    //         $e->getMessage()
    //     );
    //     $this->assertInstanceOf('GuzzleHttp\Exception\RequestException', $e);
    // }

    // public function testPost_New_User()
    // {
    //     $lastname = ['The Last Name is required'];
    //     $response = $this->client->post('/v2/user/register', [
    //         'json' => [
    //             'Personal_Details' => [
    //                 'NIC' => 12345679,
    //                 'title' => 'Mr',
    //                 'f_name' => 'Mohamed',
    //                 'l_name' => '',
    //                 'm_name' => 'Nazar',
    //                 'dob' => '1990-12-13',
    //                 'ethinicity' => 'Muslim',
    //                 'gender' => 'Male',
    //                 'civil_status' => 'Married',
    //                 'f_appoint_date' => '2016-05-12',
    //             ],
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertEquals(null, $data['data']);
    //     $this->assertEquals($data['message']['Personal_Details'], $lastname);
    // }

    // public function testDelete_Error()
    // {
    //     $response = $this->client->delete('/v2/user/register', [
    //         'http_errors' => false,
    //     ]);

    //     $this->assertEquals(405, $response->getStatusCode());
    // }

    // public function testGet_Error()
    // {
    //     $response = $this->client->get('/v2/user/register', [
    //         'http_errors' => false,
    //     ]);

    //     $this->assertEquals(405, $response->getStatusCode());
    // }

    // public function testPost_New_Employee()
    // {
    //     $response = $this->client->post('/v2/employee', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_New_Employee_createWithArray()
    // {
    //     $response = $this->client->post('/v2/employee/createWithArray', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testGet_List_Employee()
    // {
    //     $response = $this->client->post('/v2/employee/list', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testGet_Employee_Attachement()
    // {
    //     $response = $this->client->get('/v2/employee/employeeAttachments/1', [

    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_Employee_Attachement()
    // {
    //     $response = $this->client->post('/v2/employee/employeeAttachments', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPut_Employee_Attachement()
    // {
    //     $response = $this->client->put('/v2/employee/employeeAttachments', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testDelete_Employee_Attachement()
    // {
    //     $response = $this->client->delete('/v2/employee/employeeAttachments', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_Employee_Status_Update()
    // {
    //     $response = $this->client->delete('/v2/employee/statusUpdate', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testGet_User_By_Name()
    // {
    //     $response = $this->client->delete('/v2/user/user1', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPut_User_By_Name()
    // {
    //     $response = $this->client->put('/v2/user/user1', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testDelete_User_By_Name()
    // {
    //     $response = $this->client->delete('/v2/user/user1', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_User_Upload_Pic()
    // {
    //     $response = $this->client->post('/v2/user/uploadpic/user1', [
    //         'json' => [
    //         ],
    //     ]);

    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

}
