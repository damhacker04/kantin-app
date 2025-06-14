<?php

namespace App\Http\Controllers;

use App\Models\Pembeli;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class PembeliAuthController extends Controller
{
    public function register(Request $request)
{
    $request->validate([
        'nama_lengkap' => 'required|string|max:100',
        'username'     => 'required|string|max:50|unique:pembeli',
        'email'        => 'required|email|unique:pembeli',
        'password'     => 'required|string|min:8|confirmed',
    ]);

    $pembeli = Pembeli::create([
        'nama_lengkap' => $request->nama_lengkap,
        'username'     => $request->username,
        'email'        => $request->email,
        'password'     => Hash::make($request->password),
    ]);

    return response()->json([
        'message' => 'Registrasi berhasil',
        'pembeli' => $pembeli
    ], 201);
}

public function login(Request $request)
{
    $request->validate([
        'username' => 'required|string',
        'password' => 'required|string',
    ]);

    $pembeli = \App\Models\Pembeli::where('username', $request->username)->first();

    if (!$pembeli || !Hash::check($request->password, $pembeli->password)) {
        return response()->json([
            'message' => 'Username atau password salah'
        ], 401);
    }

    $token = $pembeli->createToken('auth_token')->plainTextToken;

    return response()->json([
        'message' => 'Login berhasil',
        'token' => $token,
        'pembeli' => $pembeli,
    ]);
}


}
