<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;


class Pesanan extends Model
{
    protected $table      = 'pesanan';
    protected $primaryKey = 'id_pesanan';
    public    $timestamps = true;          // sudah ada created_at & updated_at

    // kolom2 yang boleh di-mass-assign
    protected $fillable = [
        'id_pembeli',
        'tanggal_pesanan',
        'status',
        'total',
    ];

    /* ----- relasi ke detail_pesanan ----- */
    public function detail(): HasMany
    {
        return $this->hasMany(DetailPesanan::class, 'id_pesanan', 'id_pesanan');
    }

    /* helper: buat pesanan + tanggal default */
    public static function buat(array $attrs = []): static
    {
        $attrs['tanggal_pesanan'] = $attrs['tanggal_pesanan'] ?? Carbon::now();
        $attrs['status']          = $attrs['status']          ?? 'Pending';

        return static::create($attrs);
    }
}
