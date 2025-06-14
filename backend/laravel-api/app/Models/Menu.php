<?php
// app/Models/Menu.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Toko;

class Menu extends Model {
    protected $table = 'menu'; // Bukan menus!
    protected $primaryKey = 'id_menu';
    public $timestamps = true;

    protected $fillable = ['nama_menu', 'deskripsi', 'harga', 'id_toko'];

    public function toko() {
        return $this->belongsTo(Toko::class, 'id_toko', 'id_toko');
    }
}

