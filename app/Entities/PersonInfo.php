<?php

namespace App\Entities;

use App\Filters\Filterable;
use App\User;
use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class PersonInfo.
 *
 * @package namespace App\Entities;
 */
class PersonInfo extends Model implements Transformable
{
    use TransformableTrait, Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'identity_number',
        'gender',
        'age',
        'birth_place',
        'nationality',
        'birth_date',
    ];

    public function users() {
        return $this->hasMany(User::class);
    }

}
