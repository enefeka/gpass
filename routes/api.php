<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post ('login', 'UserController@login');
Route::apiResource('user', 'UserController');
Route::apiResource('categories', 'CategoryController');
Route::apiResource('passwords', 'PasswordController');
Route::post('register', 'UserController@register');