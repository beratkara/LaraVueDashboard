<?php

namespace App;

use App\Entities\Permissions;
use App\Entities\PersonInfo;
use App\Entities\Roles;
use App\Filters\Filterable;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, Filterable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'password',
        'name',
        'surname',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function info() {
        return $this->hasOne(PersonInfo::class);
    }

    public function permissions(): MorphToMany
    {
        return $this->morphedByMany(
            Permissions::class,
            'model',
            'model_has_permissions',
            'model_id',
            'permission_id',
        );
    }

    public function roles(): MorphToMany
    {
        return $this->morphedByMany(
            Roles::class,
            'model',
            'model_has_roles',
            'model_id',
            'role_id'
        );
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
