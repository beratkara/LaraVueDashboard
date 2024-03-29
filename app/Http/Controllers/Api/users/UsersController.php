<?php

namespace App\Http\Controllers\Api\users;

use App\Filters\UsersFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\UsersResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param UsersFilters $filters
     * @return AnonymousResourceCollection
     */
    public function index(Request $request, UsersFilters $filters)
    {
        $pagination = (int)$request->get('paginate', 10);

        $dealers = User::filter($filters)
            ->paginate($pagination);

        return UsersResource::collection($dealers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return void
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return void
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return void
     */
    public function destroy($id)
    {
        //
    }
}
