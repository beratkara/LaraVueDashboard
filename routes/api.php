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

            Route::namespace('users')->group(function (){
                Route::get('users', 'UsersController@index');
                Route::get('users/settings', 'SettingsController@index');
            });

            Route::namespace('persons')->group(function (){
                Route::get('persons', 'PersonController@index');
                Route::post('persons', 'PersonController@store');
            });

            Route::namespace('students')->group(function (){
                Route::get('students', 'StudentsController@index');
                Route::post('students', 'StudentsController@store');
                Route::get('students/createCode/{id}', 'StudentsController@createCode');
            });

            Route::namespace('system')->group(function (){
                Route::get('system/getRoleAndPermissions', 'SystemController@getRoleAndPermissions');
            });

        });

    });
