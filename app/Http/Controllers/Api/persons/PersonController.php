<?php

namespace App\Http\Controllers\Api\persons;

use App\Entities\PersonInfo;
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

        /** @var User $persons */
        $persons = User::filter($filters)
            ->paginate($pagination);

        return PersonResource::collection($persons);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return PersonResource
     */
    public function store(Request $request)
    {
        $attributes = $request->only(['email','password','name','surname']);

        /** @var User $user */
        $user = User::create([
            'name'     => $attributes['name'],
            'surname'  => $attributes['surname'],
            'email'    => Str::random(5).$attributes['email'],
            'password' => bcrypt($attributes['password']),
        ]);

        $attributesInfo = $request->only(['identity_number','gender','age','birth_place','nationality','birth_day']);
        $attributesInfo['identity_number'] = Str::random(11);

        info($attributesInfo);

        $user->info()->firstOrCreate([
            'owner' => User::find($user->id)->uuid
        ], [
            'identity_number' => $attributesInfo['identity_number'],
            'owner' => User::find($user->id)->uuid,
        ]);

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
