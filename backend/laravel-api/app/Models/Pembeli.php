<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pembeli extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $table = 'pembeli';
    protected $primaryKey = 'id_pembeli';
    public $timestamps = false;

    protected $fillable = [
        'nama_lengkap',
        'username',
        'email', // ✅ FIX: ini wajib ada
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}
