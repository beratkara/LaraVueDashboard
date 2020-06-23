<?php

use App\Entities\Permissions;
use Illuminate\Database\Seeder;
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
        $permissions = [
            [
                'name' => 'Dashboardı Görebilir',
                'slug' => 'Dashboard Show'
            ],
            [
                'name' => 'Personelleri Görebilir',
                'slug' => 'Persons Show'
            ],
            [
                'name' => 'Personel Oluşturabilir',
                'slug' => 'Persons Create'
            ],
            [
                'name' => 'Öğrencileri Görebilir',
                'slug' => 'Students Show'
            ],
            [
                'name' => 'Öğrenci Oluşturabilir',
                'slug' => 'Students Create'
            ],
            [
                'name' => 'Profil Bilgilerini Görüntüleyebilir',
                'slug' => 'Profile Show'
            ],
            [
                'name' => 'Profil Bilgilerini Düzenleyebilir',
                'slug' => 'Profile Edit'
            ],
        ];

        foreach ($permissions as $key => $value) {
            Permissions::updateOrCreate(
                ['name' => $value['name']],
                ['slug' => Str::slug($value['slug'])]
            );
        }

    }
}
