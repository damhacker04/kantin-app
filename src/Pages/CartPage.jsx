/* src/Pages/CartPage.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import CartItem from "../Components/CartItem";
import FooterCheckout from "../Components/FooterCheckout";
import { useCart } from "../CartContext";   // ambil data keranjang global

const CartPage = () => {
  const navigate = useNavigate();
  const { items: cartItems } = useCart();  // items = array dari context

  /* Hitung total harga berdasar qty */
  const calculateTotal = () =>
    cartItems.reduce((tot, item) => tot + item.price * item.qty, 0);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 pb-24">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* ────── Daftar item ────── */}
          <div className="my-4 w-full rounded-lg border-2 border-gray-200 p-4 lg:w-1/2">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold">Keranjang Saya</h1>
              <span className="text-gray-500">
                {cartItems.length} items
              </span>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-sm text-gray-500">Keranjang masih kosong.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* ────── Ringkasan & tombol bayar (desktop) ────── */}
          <div className="hidden w-full p-4 lg:block lg:w-1/2">
            <div className="sticky top-24 rounded-lg border-2 border-gray-200 p-4">
              <div className="mb-4 text-xl font-bold">Checkout</div>

              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="font-medium">Total Harga</span>
                <span className="font-bold">
                  Rp {calculateTotal().toLocaleString("id-ID")}
                </span>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-4 w-full rounded-lg bg-emerald-500 py-2 text-white hover:bg-emerald-600 disabled:opacity-50"
                disabled={cartItems.length === 0}
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer checkout (mobile) */}
      <FooterCheckout placeholder="Checkout" />
    </div>
  );
};

export default CartPage;
