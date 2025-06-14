<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PembeliAuthController;
use App\Http\Controllers\KantinController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PembayaranController;
use App\Http\Controllers\PesananController;

Route::post('/pembeli/register', [PembeliAuthController::class, 'register']);
Route::post('/pembeli/login', [PembeliAuthController::class, 'login']);
Route::post('pembayaran', [PembayaranController::class,'store']);
Route::post('pesanan', [PesananController::class, 'store']);
Route::middleware('auth:sanctum')->get('/pembeli', [PembeliAuthController::class, 'me']);
Route::get('/kantin', [KantinController::class, 'index']);
Route::get('/kantin/{id}', [KantinController::class, 'show']);
Route::get('/menus', [MenuController::class, 'index']); // opsional
Route::get('/menus/{id}', [MenuController::class, 'show']);
Route::get  ('pembayaran', [PembayaranController::class, 'index']);
Route::get ('pesanan', [PesananController::class, 'index']);