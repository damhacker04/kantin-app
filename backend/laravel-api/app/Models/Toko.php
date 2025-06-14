<?php
// app/Models/Kantin.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Toko extends Model
{
    protected $table = 'toko';
    protected $primaryKey = 'id_toko';

    public function menu()
    {
        return $this->hasMany(Menu::class, 'id_toko', 'id_toko');
    }
}


