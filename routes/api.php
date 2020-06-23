<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('auth')
    ->name('admin')
    ->namespace('Api')
    ->group(function () {

        Route::post('login', 'AuthController@login');
        Route::post('register', 'AuthController@register');

        Route::middleware('jwt.auth')->group(function () {

            Route::post('logout', 'AuthController@logout');

            Route::namespace('dealers')->group(function (){
                Route::get('dealers', 'DealersController@index');
                Route::post('dealers', 'DealersController@store');
            });

            Route::namespace('users')->group(function (){
                Route::get('users', 'UsersController@index');
                Route::get('users/settings', 'SettingsController@index');
            });

            Route::namespace('persons')->group(function (){
                Route::get('persons', 'PersonController@index');
                Route::post('persons', 'PersonController@store');
            });

        });



    });
