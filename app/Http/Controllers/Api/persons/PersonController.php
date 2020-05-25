<?php

namespace App\Http\Controllers\Api\persons;

use App\Filters\PersonFilters;
use App\Http\Controllers\Controller;
use App\Http\Resources\PersonResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

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

        $persons = User::filter($filters)
            ->paginate($pagination);

        return PersonResource::collection($persons);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
