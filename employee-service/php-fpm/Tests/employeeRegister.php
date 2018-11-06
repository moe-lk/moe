<?php

require 'vendor/autoload.php';

use Faker\Factory;
use Faker\Provider\ar_SA\Person;
use GuzzleHttp\Client;
use PHPUnit\Framework\TestCase;

class UserControllerTest extends TestCase
{

    protected $client;
    protected $token;
    protected $faker;

    protected function setUp()
    {
        // $this->person = new Person();
        $this->faker = Factory::create('en_US');
        // $this->faker->seed(5);
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
                'Authorization' => fread($token, filesize("./token")),
            ],
        ]);
    }

    public function testPost_Register_Employee()
    {
        echo 'testPost_Register_Employee=================\n ';
        $requestBody = [
            'Account_Details' => [
                'id' => 0,
                'user_name' => $this->faker->userName,
                'passwd' => $this->faker->password,
                'name' => $this->faker->name,
                'level' => 'string',
                'sub_location_id' => 2,
                'person_id' => 1,
            ],
            'Personal_Details' => [
                'ID' => 0,
                'NIC' => $this->faker->numberBetween(800000000,999999999),
                'title' => $this->faker->title,
                'f_name' => $this->faker->firstName,
                'l_name' => $this->faker->lastName,
                'm_name' => $this->faker->name,
                'in_name' => 'R.M.P.M.Rathnayaka',
                'si_in_name' => 'ආර්. එම්. පී. එම්. රත්නායක',
                'ta_in_name' => 'ஆர்.எம்.பி.எம்.ரத்நாயக்க',
                'dob' => '1963-09-19',
                'ethinicity' => 'Sinhala',
                'gender' => 'Male',
                'civil_status' => 'Married',
                'f_appoint_date' => '2012-12-12',
                'f_appoint_type' => 'Permanant',
                'active' => 1,
                'profile_pic' => 'string',
            ],
            'Permanent_Contact_Details' => [
                'ID' => 0,
                'address_type' => 'Permanant',
                'address_1' => $this->faker->streetAddress,
                'address_2' =>  $this->faker->streetAddress,
                'address_3' => $this->faker->city,
                'postal_code' => $this->faker->numberBetween(1000,9000),
                'mobile' => $this->faker->ean8,
                'telephone' => $this->faker->ean8,
                'email' => $this->faker->email,
            ],
            'Temparary_Contact_Details' => [
                'ID' => 0,
                'address_type' => 'temp',
                'address_1' => $this->faker->streetAddress,
                'address_2' =>  $this->faker->streetAddress,
                'address_3' => $this->faker->city,
                'postal_code' => $this->faker->numberBetween(1000,9000),
                'mobile' => $this->faker->ean8,
                'telephone' => $this->faker->ean8,
                'email' => $this->faker->email,
            ],
            'General_Service' => [
                'ID' => 0,
                'date_join' => '2016-01-12',
                'way_join' => 'Open',
                'cadre' => 'GeneralCadre',
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
            ],
            'Current_Service' => [
                'ID' => 0,
                'person_id' => 0,
                'service_sector' => 'sleas',
                'service_mode' => 1,
                'service_status' => 'Active',
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
                'barcode' => $this->faker->ean8,
                'user_updated' => 'user1',
            ],
        ];
        $response = $this->client->post('/v2/employees', [
            'json' => $requestBody,
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        var_dump($data);
        // $this->assertNotNull($data['data']);
      

    }

    public function testGet_Get_Employee()
    {
        $response = $this->client->get('/v2/employee?Id=3');
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertNotNull($data['data']);
    }

    // public function testGet_Get_Employee_list_0()
    // {
    //     $response = $this->client->get('/v2/employee/list/0');
    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testGet_Get_Employee_list_1()
    // {
    //     $response = $this->client->get('/v2/employee/list/1');
    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testGet_Get_Employee_list_3()
    // {
    //     $response = $this->client->get('/v2/employee/list/2');
    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_Employee_Status_Update()
    // {
    //     echo 'testPost_Employee_Status_Update============== n\n';
    //     $requestBody = [
    //         'ID'    => 500,
    //         'service_status'  => 'InActive'
    //     ];
    //     $response = $this->client->post('/v2/employee/statusUpdate',[
    //         'json' => $requestBody,
    //     ]);
    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertNotNull($data['data']);
    // }

    // public function testPost_Employee_Approve_Reject()
    // {
    //     echo 'testPost_Employee_Approve_Reject============== n\n';
    //     $requestBody = [
    //         'ID'    => 2,
    //         'approved'  => 1
    //     ];
    //     $response = $this->client->post('/v2/employee/approveReject',[
    //         'json' => $requestBody,
    //     ]);
    //     $this->assertEquals(200, $response->getStatusCode());
    //     $data = json_decode($response->getBody(), true);
    //     $this->assertSame($requestBody, $data['data']);
    // }

}
