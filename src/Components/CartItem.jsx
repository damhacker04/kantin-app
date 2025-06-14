/* src/Components/CartItem.jsx */
import React from "react";
import { useCart } from "../CartContext";   // akses increment / decrement

const CartItem = ({ item }) => {
  const { increment, decrement } = useCart();

  return (
    <div className="flex rounded-lg border-2 border-gray-200 p-4">
      {/* placeholder gambar – biarkan dulu */} 
      <div className="mr-2 h-16 w-16 bg-amber-500" />

      <div className="flex flex-1 flex-col">
        {/* nama + harga satuan */}
        <div className="flex justify-between">
          <h3 className="font-medium">
            {item.name || item.title || "Menu"}
          </h3>
          <p className="font-semibold">
            Rp {Number(item.price).toLocaleString("id-ID")}
          </p>
        </div>

        {/* tombol – / qty / +  */}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="h-8 w-8 rounded-full border text-gray-500 hover:bg-green-400"
              onClick={() => decrement(item.id)}
            >
              –
            </button>

            <span>{item.qty}</span>

            <button
              className="h-8 w-8 rounded-full border text-gray-500 hover:bg-green-400"
              onClick={() => increment(item.id)}
            >
              +
            </button>
          </div>

          {/* tombol catatan – belum di-hook  */}
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => console.log("Add note")}
          >
            Catatan
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
