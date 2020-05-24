<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Prettus\Validator\Contracts\ValidatorInterface;
use Prettus\Validator\Exceptions\ValidatorException;
use App\Http\Requests\DealersCreateRequest;
use App\Http\Requests\DealersUpdateRequest;
use App\Repositories\DealersRepository;
use App\Validators\DealersValidator;

/**
 * Class DealersController.
 *
 * @package namespace App\Http\Controllers;
 */
class DealersController extends Controller
{
    /**
     * @var DealersRepository
     */
    protected $repository;

    /**
     * @var DealersValidator
     */
    protected $validator;

    /**
     * DealersController constructor.
     *
     * @param DealersRepository $repository
     * @param DealersValidator $validator
     */
    public function __construct(DealersRepository $repository, DealersValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->repository->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        $dealers = $this->repository->all();

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $dealers,
            ]);
        }

        return view('dealers.index', compact('dealers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  DealersCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(DealersCreateRequest $request)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_CREATE);

            $dealer = $this->repository->create($request->all());

            $response = [
                'message' => 'DealersResource created.',
                'data'    => $dealer->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {
            if ($request->wantsJson()) {
                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $dealer = $this->repository->find($id);

        if (request()->wantsJson()) {

            return response()->json([
                'data' => $dealer,
            ]);
        }

        return view('dealers.show', compact('dealer'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $dealer = $this->repository->find($id);

        return view('dealers.edit', compact('dealer'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  DealersUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     *
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(DealersUpdateRequest $request, $id)
    {
        try {

            $this->validator->with($request->all())->passesOrFail(ValidatorInterface::RULE_UPDATE);

            $dealer = $this->repository->update($request->all(), $id);

            $response = [
                'message' => 'DealersResource updated.',
                'data'    => $dealer->toArray(),
            ];

            if ($request->wantsJson()) {

                return response()->json($response);
            }

            return redirect()->back()->with('message', $response['message']);
        } catch (ValidatorException $e) {

            if ($request->wantsJson()) {

                return response()->json([
                    'error'   => true,
                    'message' => $e->getMessageBag()
                ]);
            }

            return redirect()->back()->withErrors($e->getMessageBag())->withInput();
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if (request()->wantsJson()) {

            return response()->json([
                'message' => 'DealersResource deleted.',
                'deleted' => $deleted,
            ]);
        }

        return redirect()->back()->with('message', 'DealersResource deleted.');
    }
}
