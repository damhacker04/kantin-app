/* src/CartContext.jsx */
import { createContext, useContext, useEffect, useState } from "react";

/* -------- context -------- */
const CartContext = createContext();

/* -------- provider -------- */
export const CartProvider = ({ children }) => {
  /* ▶  Muat isi keranjang dari localStorage   */
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  /* ▶  Simpan kembali ke localStorage setiap kali cart berubah */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ――― helper functions ――― */
  /** Tambahkan item baru (atau ++ qty jika sudah ada) */
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((it) => it.id === item.id);
      if (exist) {
        return prev.map((it) =>
          it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  /** Hapus satu item berdasarkan id */
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((it) => it.id !== id));

  /** Ubah quantity langsung */
  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: qty } : it)),
    );

  /** 👉 Kosongkan keranjang (dipakai setelah pembayaran sukses) */
  const clearCart = () => setCart([]);

  /* -------- provider value -------- */
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* -------- hook praktis -------- */
export const useCart = () => useContext(CartContext);
