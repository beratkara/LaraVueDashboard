<?php

use App\Entities\Permissions;
use App\Entities\Roles;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class AuthorizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var Roles $fullAuthority */
        $fullAuthority = Roles::where('slug','school-management')->firstOrFail();
        $fullAuthority->permissions()->attach(Permissions::all());

        /** @var User $user */
        $user = User::where('email','admin@admin.com')->first();
        $user->roles()->sync($fullAuthority);
        $user->permissions()->sync(Permissions::all());
        $fullAuthority->users()->attach($user);

        /** @var Roles $parentsAuthority */
        $parentsAuthority = Roles::where('slug','parents')->firstOrFail();
        $parents = [
            Str::slug('Students Show'),
            Str::slug('Profile Show'),
        ];
        $parentsAuthority->permissions()->attach(Permissions::whereIn('slug',$parents)->get());

        /** @var Roles $studentAuthority */
        $studentAuthority = Roles::where('slug','student')->firstOrFail();
        $student = [
            Str::slug('Profile Show'),
        ];
        $studentAuthority->permissions()->attach(Permissions::whereIn('slug',$student)->get());
    }
}
