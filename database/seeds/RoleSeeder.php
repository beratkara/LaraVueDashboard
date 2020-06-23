<?php

use App\Entities\Roles;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'School Management'
            ],
            [
                'name' => 'Student'
            ],
            [
                'name' => 'Parents'
            ],
        ];

        foreach ($roles as $key => $value) {
            Roles::updateOrCreate(
                ['name' => $value['name']],
                ['slug' => Str::slug($value['name'])]
            );
        }
    }
}
