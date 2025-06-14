<?php
// app/Http/Controllers/MenuController.php
namespace App\Http\Controllers;

use App\Models\Menu;

class MenuController extends Controller
{
    public function index()
    {
        return response()->json(
            Menu::select(
                'id_menu  as id',
                'nama_menu as name',
                'harga     as price'
            )->get()
        );
    }

    
}
