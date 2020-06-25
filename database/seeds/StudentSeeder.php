<?php

use App\Entities\Roles;
use App\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var Roles $studentRoles */
        $studentRoles = Roles::where('slug','student')->firstOrFail();
        $permissions = $studentRoles->permissions()->get();

        $faker = Faker\Factory::create("tr_TR");
        $faker->addProvider(new Faker\Provider\tr_TR\Person($faker));
        foreach (range(10,20) as $step)
        {
            $gender = $faker->randomElement(['male', 'female']);
            /** @var User $user */
            $user = User::firstOrCreate([
                'email' => $faker->unique()->safeEmail,
                'name' => $faker->unique()->firstName($gender),
                'surname' => $faker->unique()->lastName,
                'password' => bcrypt('12345678'),
            ]);
            $birthDate = $faker->date('Y-m-d','now');
            $user->info()->firstOrCreate([
                'identity_number' => $faker->unique()->tcNo,
                'gender' => $gender,
                'birth_date' => $birthDate,
                'age' => Carbon::now()->diffInYears($birthDate),
                'birth_place' => $faker->city,
                'nationality' => $faker->languageCode,
            ]);
            $user->roles()->sync($studentRoles);
            $user->permissions()->sync($permissions);
            $studentRoles->users()->attach($user);
        }
    }
}
