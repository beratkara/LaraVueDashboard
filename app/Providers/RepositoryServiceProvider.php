<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(\App\Repositories\DealersRepository::class, \App\Repositories\DealersRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PersonInfoRepository::class, \App\Repositories\PersonInfoRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\RolesRepository::class, \App\Repositories\RolesRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PermissionsRepository::class, \App\Repositories\PermissionsRepositoryEloquent::class);
        //:end-bindings:
    }
}
