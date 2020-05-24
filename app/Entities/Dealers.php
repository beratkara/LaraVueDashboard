<?php

namespace App\Entities;

use App\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class DealersResource.
 *
 * @package namespace App\Entities;
 */
class Dealers extends Model implements Transformable
{
    use TransformableTrait, Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'image',
        'owner'
    ];

}
