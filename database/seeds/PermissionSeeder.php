<?php

use App\Entities\Roles;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
        Roles::firstOrCreate([
            'name' => 'Okul Yönetimi',
            'slug' => Str::slug('Okul Yönetimi')
        ]);

        Roles::firstOrCreate([
            'name' => 'Öğrenci',
            'slug' => Str::slug('Öğrenci')
        ]);

        Roles::firstOrCreate([
            'name' => 'Veli',
            'slug' => Str::slug('Veli')
        ]);
    }
}
