<?php

namespace App\Filters;

use App\Filters\QueryFilter;

class PersonFilters extends QueryFilter
{
    protected $availableIncludes = [
        'info',
    ];

    protected $defaultIncludes = [

    ];

    protected $searches = [
        'name' => 'ilike'
    ];
}
