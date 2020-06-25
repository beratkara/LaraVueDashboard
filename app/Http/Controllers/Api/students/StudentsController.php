<?php

namespace App\Http\Controllers\Api\students;

use App\Entities\Roles;
use App\Events\ParentCreatedAccount;
use App\Filters\StudentsFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\PersonResource;
use App\User;
use Faker\Factory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param StudentsFilters $filters
     * @return AnonymousResourceCollection
     */
    public function index(Request $request,StudentsFilters $filters)
    {
        $pagination = (int)$request->get('paginate', 10);

        /** @var Roles $role */
        $role = Roles::where('slug','student')->first();

        return PersonResource::collection($role->users()->filter($filters)->paginate($pagination));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     */
    public function store(Request $request)
    {

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
     * @param Request $request
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

    public function createCode($id)
    {
        /** @var User $user */
        $user = User::where('uuid',$id)->firstOrFail();

        $faker = Factory::create("tr_TR");

        $code = $faker->unique()->randomNumber(6);

        $user->update([
            'code' => $code
        ]);

        event(new ParentCreatedAccount($user));

        return [
            'status' => true
        ];
    }
}
