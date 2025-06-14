<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pesanan;
use App\Models\DetailPesanan;
use App\Models\Toko;

class PesananController extends Controller
{
    /**  POST /api/pesanan  */
    public function store(Request $request)
{
    // 1. validasi ― hasilnya disimpan ke $validated
    $validated = $request->validate([
        'id_pembeli'          => 'nullable|integer',
        'tanggal_pesanan'     => 'date',
        'status'              => 'string',
        'total'               => 'required|numeric|min:1',

        'items'               => 'required|array|min:1',
        'items.*.menu_id'     => 'required|integer',
        'items.*.qty'         => 'required|integer|min:1',
    ]);

    /* 2. buat header pesanan ------------------------------------------ */
    $pesanan = Pesanan::create([
        'id_pembeli'      => $validated['id_pembeli']      ?? null,
        'tanggal_pesanan' => $validated['tanggal_pesanan'] ?? now(),
        'status'          => $validated['status']          ?? 'Pending',
        'total'           => $validated['total'],
    ]);

    /* 3. simpan detail ------------------------------------------------- */
    foreach ($validated['items'] as $it) {
        DetailPesanan::create([
            'id_pesanan' => $pesanan->id_pesanan,   // PK dari tabel pesanan
            'id_menu'    => $it['menu_id'],
            'jumlah'     => $it['qty'],             // kolom di DB = jumlah
        ]);
    }

    /* 4. respon */
    return response()->json([
        'success' => true,
        'pesanan' => $pesanan,
    ], 201);
}

 public function index(Request $request)
    {
        // contoh: kalau sudah ada auth, ambil hanya pesanan milik user itu
        // $buyerId = auth()->id();
        // $query   = Pesanan::with('detail.menu')->where('id_pembeli', $buyerId);

        $query = Pesanan::with('detail.menu.toko');   // sementara ambil semua + relasi detail
        // $query = Pesanan::with('detail.menu.toko');

        // opsional filter status ?status=Process
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // urutkan terbaru
        $pesanan = $query->orderByDesc('created_at')->get();

        return response()->json($pesanan, 200);
    }


}
