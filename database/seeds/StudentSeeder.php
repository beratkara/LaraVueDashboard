<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 0; $i < rand(2,10); $i++)
        {
            $gender = $faker->randomElement(['male', 'female']);
            DB::table('users')->insert([
                'name' => $faker->unique()->name($gender),
                ''
            ]);
        }
    }
}
