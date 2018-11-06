<?php

require 'vendor/autoload.php';

use Faker\Factory;
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
        $this->dateTime = Factory::create('DateTime');
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
                'Authorization' => fread($token, 500),
            ],
        ]);
    }

    public function testPost_Register_Employee()
    {
        echo 'testPost_Register_Employee=================\n ';
        $requestBody = [
            'Account_Details' => [
                'user_name' => $this->faker->userName,
                'passwd' => $this->faker->password,
                'name' => $this->faker->name,
                'level' => 'string',
                'sub_location_id' => 2,
                'person_id' => 136656,
            ],
            'Personal_Details' => [
                'id' => 136656,
                'NIC' => $this->faker->numberBetween(800000000, 999999999),
                'title' => $this->faker->title,
                'f_name' => $this->faker->firstName,
                'l_name' => $this->faker->lastName,
                'm_name' => $this->faker->name,
                'in_name' => 'R.M.P.M.Rathnayaka',
                'si_in_name' => 'ආර්. එම්. පී. එම්. රත්නායක',
                'ta_in_name' => 'ஆர்.எம்.பி.எம்.ரத்நாயக்க',
                'dob' => '1963-09-19',
                'ethinicity' => $this->faker->numberBetween(0, 7),
                'gender' => 'M',
                'civil_status' => 2,
                'f_appoint_date' => '2012-12-12',
                'f_appoint_type' => $this->faker->numberBetween(0, 1),
                'active' => 1,
                'profile_pic' => 'string',
            ],
            // {
            //     "nic":"931245645v",
            //     "f_name":"Hasna",
            //     "l_name":"Nizam",
            //     "in_name":"MNF Hasna",
            //     "si_in_name":"MNF Hassna",
            //     "ta_in_name":"MNF Hasna",
            //     "dob":"1993-04-27",
            //     "address":"No 25 Resrvior Road",
            //     "occupation":"Student",
            //     "office_address":"IIM",

            //     "gender":"Male",
            //     "ethinicity":"3",
            //     "person_id":136657}
            'Spouse_Details' => [
                "office_address" => $this->faker->streetAddress,
                // "address"=> $this->faker->streetAddress,
                "telephone" => "0731454121",
                'nic' => $this->faker->numberBetween(800000000, 999999999),
                'f_name' => $this->faker->firstName,
                'l_name' => $this->faker->lastName,
                'm_name' => $this->faker->name,
                'in_name' => 'R.M.P.M.Rathnayaka',
                'si_in_name' => 'ආර්. එම්. පී. එම්. රත්නායක',
                'ta_in_name' => 'ஆர்.எம்.பி.எம்.ரத்நாயக்க',
                'dob' => $this->dateTime->date('Y-m-d', '1990-12-31'),
                'ethinicity' => $this->faker->numberBetween(0, 7),
                'gender' => 'F',
                'person_id' => 136656,
            ],
            'Contact_Details' => [
                [
                    'id' => 827,
                    'address_type' => $this->faker->numberBetween(0, 1),
                    'address_1' => $this->faker->streetAddress,
                    'address_2' => $this->faker->streetAddress,
                    'address_3' => $this->faker->city,
                    'postal_code' => $this->faker->numberBetween(1000, 9000),
                    'mobile' => $this->faker->ean8,
                    'telephone' => $this->faker->ean8,
                    'email' => $this->faker->email,
                ],
                [
                    'id' => 828,
                    'address_type' => $this->faker->numberBetween(0, 1),
                    'address_1' => $this->faker->streetAddress,
                    'address_2' => $this->faker->streetAddress,
                    'address_3' => $this->faker->city,
                    'postal_code' => $this->faker->numberBetween(1000, 9000),
                    'mobile' => $this->faker->ean8,
                    'telephone' => $this->faker->ean8,
                    'email' => $this->faker->email,
                ],
            ],
            'Children_Details' => [
                [
                    'name' => $this->faker->name,
                    'dob' => $this->dateTime->date('Y-m-d', 'now'),
                    'gender' => 'M',
                    'person_id' => 136656,
                ],
                [
                    'name' => $this->faker->name,
                    'dob' => $this->dateTime->date('Y-m-d', 'now'),
                    'gender' => 'F',
                    'person_id' => 136656,
                ],
            ],
            'Qualifications' => [
                [
                    'qualification_type_id' => $this->faker->numberBetween(1, 2),
                    'qualification_id' => $this->faker->numberBetween(1, 4),
                    'qualified_date' => $this->dateTime->date('Y-m-d', 'now'),
                    'qualification_grade' => $this->faker->numberBetween(1, 4),
                    'qualified_institute' => $this->faker->name,
                    'certificate_path' => $this->faker->url,
                ],
                [
                    'qualification_type_id' => $this->faker->numberBetween(1, 2),
                    'qualification_id' => $this->faker->numberBetween(1, 4),
                    'qualified_date' => $this->dateTime->date('Y-m-d', 'now'),
                    'qualification_grade' => $this->faker->numberBetween(1, 4),
                    'qualified_institute' => $this->faker->name,
                    'certificate_path' => $this->faker->url,
                ],
            ],
            'General_Service' => [
                'id' => 558,
                'date_join' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'way_join' => $this->faker->numberBetween(0, 7),
                'cadre' => 'General Cadre',
                'grade_join' => 'Special',
                'entrance_exam_rank' => $this->faker->numberBetween(0, 2200),
                'grade' => 'Special',
                'subject' => $this->faker->numberBetween(1, 12),
                'medium' => $this->faker->numberBetween(0, 2),
                'confirm' => $this->faker->numberBetween(0, 1),
                'confirm_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'promotion_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'f_appoint_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'eb_1_pass' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'eb_2_pass' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'eb_3_pass' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'pg_dip_pass' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'pg_deg_pass' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'cb_1_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'cb_2_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
                'cb_3_date' => $this->dateTime->date('Y-m-d', '2010-12-31'),
            ],
        ];
        $response = $this->client->put('/v2/employees/136656', [
            'json' => $requestBody,
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        var_dump($data);
        // $this->assertNotNull($data['data']);

    }
}
