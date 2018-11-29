<?php


use Phinx\Seed\AbstractSeed;
use Faker\Factory;
use Faker\Provider\ar_SA\Person;

class UseProfileTable extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */
    public function run()
    {
        $this->faker = Factory::create('en_US');
        $this->faker_si = Factory::create('en_US');
        $data = [];
        for ($i=0; $i < 50 ; $i++) { 
            # code...
            $data[] = [
                'NIC' => $this->faker->numberBetween(800000000,999999999),
                'title' => $this->faker->title,
                'f_name' => $this->faker->firstName,
                'l_name' => $this->faker->lastName,
                'm_name' => $this->faker->name,
                'in_name' => $this->faker->lastName .' '.$this->faker->firstName,
                'si_in_name' => 'ආර්. එම්. පී. එම්. රත්නායක',
                'ta_in_name' => 'ஆர்.எம்.பி.எம்.ரத்நாயக்க',
                'dob' => $this->faker->dateTime()->format('Y-m-d'),
                'ethinicity' => $this->faker->numberBetween(1,7),
                'gender' => 'Male',
                'civil_status' =>$this->faker->numberBetween(1,4),
                'f_appoint_date' =>$this->faker->dateTime()->format('Y-m-d'),
                'f_appoint_type' => $this->faker->numberBetween(1,10),
                'active' => $this->faker->numberBetween(0,1),
                'profile_pic' => 'string',
                'user_updated'=>'piumi2'
            ];
            
        }
        $this->table('Personal_Details')->insert($data)->save();
       

    }
}
