<?php

use App\Entities\Permissions;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permissions::firstOrCreate([
            'name' => 'Personelleri Görebilir',
            'slug' => Str::slug('Persons Show')
        ]);

        Permissions::firstOrCreate([
            'name' => 'Personel Oluşturabilir',
            'slug' => Str::slug('Persons Create')
        ]);

        Permissions::firstOrCreate([
            'name' => 'Öğrencileri Görebilir',
            'slug' => Str::slug('Students Show')
        ]);

        Permissions::firstOrCreate([
            'name' => 'Öğrenci Oluşturabilir',
            'slug' => Str::slug('Students Create')
        ]);
    }
}
