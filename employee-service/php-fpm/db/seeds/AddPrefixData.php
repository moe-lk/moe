<!-- <?php


use Phinx\Seed\AbstractSeed;

class AddPrefixData extends AbstractSeed
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
           
        $this->table('Province_List')->insert(['prifix'=>'WP'])->where('id','=','P01')->save();
        $this->table('Province_List')->insert(['prifix'=>'CP'])->where('id','=','P02')->save();
        $this->table('Province_List')->insert(['prifix'=>'SP'])->where('id','=','P03')->save();
        $this->table('Province_List')->insert(['prifix'=>'NP'])->where('id','=','P04')->save();
        $this->table('Province_List')->insert(['prifix'=>'EP'])->where('id','=','P05')->save();
        $this->table('Province_List')->insert(['prifix'=>'NWP'])->where('id','=','P06')->save();
        $this->table('Province_List')->insert(['prifix'=>'NCP'])->where('id','=','P07')->save();
        $this->table('Province_List')->insert(['prifix'=>'UP'])->where('id','=','P08')->save();
        $this->table('Province_List')->insert(['prifix'=>'SGP'])->where('id','=','P09')->save();
        
    }
} -->
