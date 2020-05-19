<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;


class AuthController extends Controller
{

    public function login(Request $request){

        $attributes = $request->only(['credentials.email','credentials.password']);
        /*$attributes = collect($request->all());

        $user = User::create([
            'email'    => $attributes->get('credentials')['email'] ,
            'password' => bcrypt($attributes->get('credentials')['password']),
        ]);*/

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];

        if (! $token = auth()->attempt($attributes['credentials'])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
    }

}
