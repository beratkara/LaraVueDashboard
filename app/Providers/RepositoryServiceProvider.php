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
        //:end-bindings:
    }
}
