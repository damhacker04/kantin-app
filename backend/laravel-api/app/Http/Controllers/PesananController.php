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
        $query = Pesanan::with('detail.menu.toko');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $pesanan = $query->orderByDesc('created_at')->get();

        // Mapping agar nama_toko langsung tersedia
        $result = $pesanan->map(function ($p) {
            return [
                'id_pesanan' => $p->id_pesanan,
                'status'     => $p->status,
                'tanggal_pesanan' => $p->tanggal_pesanan,
                'total'      => $p->total,
                'nama_toko'  => optional($p->detail->first()->menu->toko ?? null)->nama_toko ?? '—',
                'detail'     => $p->detail,
            ];
        });

        return response()->json($result, 200);
    }
}
