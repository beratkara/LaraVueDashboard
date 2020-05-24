<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\DealersRepository;
use App\Entities\Dealers;
use App\Validators\DealersValidator;

/**
 * Class DealersRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class DealersRepositoryEloquent extends BaseRepository implements DealersRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Dealers::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return DealersValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
