<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Toko;

class KantinController extends Controller
{
    public function index()
    {
       return response()->json(
        Toko::select('id_toko', 'nama_toko as nama')->get()
    );
    }

    public function show($id)
    {
        $kantin = Toko::with('menu')->findOrFail($id);

        return response()->json([
            'id' => $kantin->id_toko,
            'name' => $kantin->nama_toko,
            'menu' => $kantin->menu,
        ]);
    }
}
