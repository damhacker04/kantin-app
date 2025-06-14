<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Menu;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetailPesanan extends Model
{
    protected $table = 'detail_pesanan';

    /* ⬇️ Tabel ini tidak punya PK auto-increment */
    public $incrementing = false;
    protected $primaryKey = null;   // atau boleh di-unset sama sekali
    public    $timestamps = true;   // karena ada created_at & updated_at

    protected $fillable = [
        'id_pesanan',
        'id_menu',
        'jumlah',        // kolom yang memang ada
    ];

    public function menu(): BelongsTo
    {
        return $this->belongsTo(Menu::class, 'id_menu', 'id_menu');
    }
}
