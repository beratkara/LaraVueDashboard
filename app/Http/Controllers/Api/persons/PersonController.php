<?php

namespace App\Http\Controllers\Api\persons;

use App\Entities\Roles;
use App\Filters\PersonFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\PersonResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Str;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param PersonFilters $filters
     * @return AnonymousResourceCollection
     */
    public function index(Request $request, PersonFilters $filters)
    {
        $pagination = (int)$request->get('paginate', 10);

        /** @var Roles $role */
        $role = Roles::where('slug','school-management')->first();

        return PersonResource::collection($role->users()->filter($filters)->paginate($pagination));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return PersonResource
     */
    public function store(Request $request)
    {
        $attributes = $request->only(['email','password','name','surname','role']);

        /** @var User $user */
        $user = User::create([
            'name'     => $attributes['name'],
            'surname'  => $attributes['surname'],
            'email'    => Str::random(5).$attributes['email'],
            'password' => bcrypt($attributes['password']),
        ]);

        $attributesInfo = $request->only(['identity_number','gender','age','birth_place','nationality','birth_day']);
        $attributesInfo['identity_number'] = Str::random(11);
        $attributesInfo['owner'] = User::find($user->id)->uuid;

        $user->info()->create($attributesInfo);

        /** @var Roles $role */
        $role = Roles::where('uuid',$attributes['role']['id'])->firstOrFail();
        $permissions = $role->permissions()->get();

        $user->roles()->sync($role);
        $user->permissions()->sync($permissions);
        $role->users()->attach($user);

        return PersonResource::make($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
