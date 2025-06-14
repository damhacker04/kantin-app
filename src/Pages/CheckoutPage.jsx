/* src/Pages/CheckoutPage.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Auth/AuthContext";
import Header from "../Components/Header";
import PaymentMethodButton from "../Components/PaymentMethodButton";
import CheckoutCard from "../Components/CheckoutCard";
import FooterCheckout from "../Components/FooterCheckout";

import { useCart } from "../CartContext";   // ambil data keranjang

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items } = useCart(); 
  const { user } = useAuth();            // items: [{ id,title,price,qty }]
  const toNumber = (v) =>
    typeof v === "number" ? v : Number(String(v).replace(/[^\d.-]/g, ""));


  /* ───── total harga keranjang ───── */
  const calculateTotal = () =>
  items.reduce(
    (sum, itm) => sum + toNumber(itm.price) * (itm.qty ?? 1),0);

  const total = calculateTotal();

  /* ───── klik tombol “Bayar” ───── */
  const handleCreateOrder = async () => {
    if (items.length === 0) return;

    try {

     const { data } = await axios.post("http://localhost:8000/api/pesanan", {
  id_pembeli : user?.id_pembeli ?? null,
  tanggal_pesanan : new Date().toISOString().slice(0,10), // YYYY-MM-DD
  status  : "Pending",
  total   : calculateTotal(),          // decimal
  items   : items.map(it => ({
    menu_id : it.menuId,               // ← integer valid
    qty     : it.qty                   // ← masih pakai qty
  }))
});

      const orderId = data?.pesanan?.id_pesanan ?? data?.pesanan?.id;
      if (!orderId) throw new Error("orderId not returned");

      /* arahkan ke PaymentPage sambil membawa orderId */
      navigate("/payment", { state: { orderId } });
    } catch (err) {
      console.error("❌ Gagal membuat pesanan:", err.response?.data || err);
      alert("Gagal membuat pesanan. Coba lagi.");
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Header />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 p-4 pb-24 lg:grid-cols-2">
        {/* ───────── Ringkasan Pesanan ───────── */}
        <div className="rounded-md border-2 border-gray-200 p-4">
          <div className="mb-4 text-2xl font-bold">Ringkasan Pesanan</div>

          {items.length === 0 ? (
            <p className="text-sm text-gray-500">Keranjang kosong.</p>
          ) : (
            <section className="space-y-4">
              {items.map((itm) => (
                <CheckoutCard
                  key={itm.id}
                  image={itm.image || ""}
                  itemName={itm.title || itm.name}
                  quantity={itm.qty}
                  price={Number(itm.price)}
                />
              ))}

              {/* total kecil di bagian bawah ringkasan  */}
              <div className="flex justify-between border-t px-2 pt-2">
                <div className="text-lg font-medium">Total Semua</div>
                <div className="text-lg font-bold text-black">
                  Rp {total.toLocaleString("id-ID")}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* ───────── Metode Pembayaran / tombol Bayar ───────── */}
        <div className="w-full lg:sticky lg:top-24 lg:self-start">
          <div className="box-border w-full rounded-md border-2 border-gray-200 p-4">
            <div className="mb-4 text-xl font-bold">Metode Pembayaran</div>

            <div className="flex min-h-12 justify-between">
              <div className="text-lg font-medium">Total Semua</div>
              <div className="text-lg font-bold text-black">
                Rp&nbsp;{total.toLocaleString("id-ID")}
              </div>
            </div>

            {/* komponen pilihan metode (opsional) */}
            <PaymentMethodButton onPay={handleCreateOrder} />

            {/* tombol BAYAR → buat pesanan & lanjut */}
           
          </div>
        </div>
      </main>

      {/* footer (mobile) – tampil total yg sama */}
      <FooterCheckout
        placeholder="Bayar"
        Lt="Total Harga"
        Rt={`Rp ${total.toLocaleString("id-ID")}`}
      />
    </div>
  );
};

export default CheckoutPage;
