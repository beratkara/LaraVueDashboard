<?php

namespace App\Filters;

use App\Filters\QueryFilter;

class StudentsFilters extends QueryFilter
{
    protected $availableIncludes = [
        'info',
    ];

    protected $defaultIncludes = [
        'permissions',
        'roles'
    ];

    protected $searches = [
        'name' => 'ilike',
        'surname' => 'ilike',
    ];
}
