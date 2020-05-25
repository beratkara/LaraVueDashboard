<?php

namespace App\Filters;

use App\Filters\QueryFilter;

class DealersFilters extends QueryFilter
{
    protected $availableIncludes = [
        'users',
    ];

    protected $defaultIncludes = [

    ];

    protected $searches = [
        'name' => 'ilike'
    ];
}
