/* src/Pages/PaymentPage.jsx */
import React from "react";
import {
  Link,
  useNavigate,
  useLocation,        // 🆕 baca orderId
} from "react-router-dom";

import axios from "axios";

import { useCart } from "../CartContext";
import CheckoutCard from "../Components/CheckoutCard";
import DetailTransaksiCard from "../Components/DetailTransaksiCard";

const PaymentPage = () => {
  /* ───── data & helper ───── */
  const { items, clearCart } = useCart();
  const navigate   = useNavigate();
  const { state }  = useLocation();          // { orderId: … } dikirim Checkout
  const orderId    = state?.orderId;         // bisa undefined bila lang­sung akses

  /* total harga */
  const total = items.reduce(
    (sum, i) => sum + Number(i.price ?? 0) * (i.qty ?? 1),
    0,
  );

  /* ───── handler bayar ───── */
  const handlePay = async () => {
    if (!orderId) {
      alert("ID pesanan tidak ditemukan. Silakan kembali ke halaman sebelumnya.");
      navigate(-1);
      return;
    }

    try {
      await axios.post("http://localhost:8000/api/pembayaran", {
        id_pesanan : orderId,      // ✔ memakai id valid dari DB
        jumlah     : Number(total),
        metode     : "Qris",
        status     : "Paid",
      });

      clearCart();                 // kosongkan keranjang setelah sukses
      navigate("/PaymentSuccess"); // alihkan ke halaman sukses
    } catch (err) {
      console.error("Gagal simpan pembayaran:", err.response?.data || err);
      alert("Pembayaran gagal disimpan.");
    }
  };

  /* ───── UI ───── */
  return (
    <div className="min-h-screen w-full">
      {/* Header minimal (tombol kembali) */}
      <header className="sticky top-0 z-10 flex h-15 items-center
                         bg-emerald-500 p-4 text-white">
        <button
          onClick={() => navigate(-1)}
          className="rounded p-2 hover:bg-emerald-400"
          aria-label="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </header>

      <main className="mx-auto flex min-h-screen flex-col pb-24">
        {/* Placeholder QR / gambar metode pembayaran */}
        <div className="mx-auto my-8 h-60 w-60 bg-gray-500" />

        <div className="mx-4 space-y-8 md:mx-auto md:min-w-160">
          {/* Ringkasan transaksi (statik) */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Ringkasan Transaksi</h2>
            <div className="space-y-2 p-4">
              <DetailTransaksiCard lt="Nomor Invoice"     rt={`INV-${orderId || "-"}`} />
              <DetailTransaksiCard lt="Status Pembayaran" rt="Unpaid" />
              <DetailTransaksiCard lt="Status Transaksi"  rt="Pending" />
              <DetailTransaksiCard lt="Metode Pembayaran" rt="Qris" />
            </div>
          </section>

          {/* Ringkasan pesanan */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">Ringkasan Pesanan</h2>
            <div className="space-y-4">
              {items.map((it) => (
                <CheckoutCard
                  key={it.id}
                  itemName={it.title || it.name}
                  quantity={it.qty ?? 1}
                  price={it.price}
                />
              ))}

              {/* Total */}
              <div className="flex justify-between px-4 pt-2">
                <div className="text-lg font-medium">Total Semua</div>
                <div className="text-lg font-bold">
                  Rp {total.toLocaleString("id-ID")}
                </div>
              </div>

              {/* Tombol Konfirmasi & Bayar */}
              <button
                onClick={handlePay}
                className="mt-4 flex h-12 w-full items-center
                           justify-center rounded-lg bg-emerald-500
                           text-base font-bold text-white
                           transition hover:bg-emerald-600"
              >
                Konfirmasi&nbsp;&amp;&nbsp;Bayar
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;
