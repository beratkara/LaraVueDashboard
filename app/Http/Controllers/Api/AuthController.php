<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;


class AuthController extends Controller
{
    public function login(Request $request) {

        $attributes = $request->only(['credentials.email','credentials.password']);

        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];

        if (! $token = auth()->attempt($attributes['credentials'])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
    }

    public function register(Request $request) {
        $attributes = $request->only(['credentials.email','credentials.password']);

        /** @var User $user */
        $user = User::firstOrCreate([
            'email'    => $attributes['credentials']['email'] ,
            'password' => bcrypt($attributes['credentials']['password']),
        ]);

        return response()->json(['status' => 'success'], 200);
    }

    public function logout(Request $request) {
        try {

            auth()->logout();
        }
        catch (TokenExpiredException $exception)
        {
            return response()->json(['message' => 'Token Expired !'], 401);
        }

        return response()->json(['message' => 'Successfully logged out'], 200);
    }

}
