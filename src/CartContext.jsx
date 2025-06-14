// src/CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

/* ─────────────────────────  Provider  ───────────────────────── */
export const CartProvider = ({ children }) => {
  /** items = [{ id, name/title, price, qty }] */
  const [items, setItems] = useState([]);

  /* ───── addItem: jika sudah ada → qty++ ; jika baru → qty=1 ─── */
  const addItem = (item) =>
    setItems((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        // sudah ada → cukup tambah qty
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      // belum ada → push dengan qty = 1
      return [...prev, { ...item, qty: 1 }];
    });

  /* ───── increment / decrement kuantitas ─── */
  const increment = (id) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
    );

  const decrement = (id) =>
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0) // hapus kalau qty = 0
    );

  /* ───── clearCart: kosongkan semua item ─── */
  const clearCart = () => setItems([]);

  /* ───── expose ke komponen ─── */
  return (
    <CartContext.Provider
      value={{ items, addItem, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* ────────────────────────  Hook pemakaian  ───────────────────── */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus di-dalam <CartProvider>");
  return ctx;
};
