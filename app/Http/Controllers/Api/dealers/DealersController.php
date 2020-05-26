<?php

namespace App\Http\Controllers\Api\dealers;

use App\Filters\DealersFilters;
use App\Http\Controllers\Controller;
use App\Http\Requests\dealers\CreateRequest;
use App\Http\Resources\DealersResource;
use Illuminate\Http\Request;
use App\Entities\Dealers;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class DealersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param DealersFilters $filters
     * @return AnonymousResourceCollection
     */
    public function index(Request $request, DealersFilters $filters)
    {
        $pagination = (int)$request->get('paginate', 10);

        $dealers = Dealers::filter($filters)
            ->paginate($pagination);

        return DealersResource::collection($dealers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CreateRequest $request
     * @return DealersResource
     */
    public function store(CreateRequest $request)
    {
        $attributes = collect($request->all());

        $dealers = Dealers::firstOrCreate(['name' => $attributes['name'], 'owner' => $attributes['user']['uuid']]);

        return DealersResource::make($dealers);
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
}
