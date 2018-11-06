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


    public function testGet_Get_Options()
    {
        $response = $this->client->get('/v2/employees?filter={filter}&range={range}&sort={sort}');
        $this->assertEquals(200, $response->getStatusCode());
        $data = json_decode($response->getBody(), true);
        $this->assertNotNull($data['data']);
    }
}
