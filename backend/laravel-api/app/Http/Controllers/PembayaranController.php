<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pembayaran;          // ← model pembayaran
use App\Models\Pesanan;             // ← ⬅️ tambahkan baris ini
use Carbon\Carbon;

class PembayaranController extends Controller
{
    /**  POST /api/pembayaran  */
    public function store(Request $request)
    {
        /* ---------- validasi ---------- */
        $validated = $request->validate([
            'id_pesanan' => 'required|integer|exists:pesanan,id_pesanan',
            'jumlah'     => 'required|numeric|min:1',
            'metode'     => 'required|string|max:50',
            'status'     => 'nullable|string|in:Unpaid,Pending,Paid',
            'tanggal'    => 'nullable|date',
        ]);

        /* ---------- simpan pembayaran ---------- */
        $validated['status']  = $validated['status']  ?? 'Paid';
        $validated['tanggal'] = $validated['tanggal'] ?? Carbon::today();

        $pembayaran = Pembayaran::create($validated);

        /* ---------- update status pesanan ---------- */
        Pesanan::where('id_pesanan', $validated['id_pesanan'])
               ->update(['status' => 'Process']);

        return response()->json([
            'success'     => true,
            'pembayaran'  => $pembayaran
        ], 201);
    }
}
