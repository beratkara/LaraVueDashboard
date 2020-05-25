<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\PersonInfoRepository;
use App\Entities\PersonInfo;
use App\Validators\PersonInfoValidator;

/**
 * Class PersonInfoRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class PersonInfoRepositoryEloquent extends BaseRepository implements PersonInfoRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return PersonInfo::class;
    }

    /**
    * Specify Validator class name
    *
    * @return mixed
    */
    public function validator()
    {

        return PersonInfoValidator::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
