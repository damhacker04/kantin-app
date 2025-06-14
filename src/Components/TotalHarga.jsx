import React from "react";
import { Link } from "react-router-dom"; // Import dari react-router-dom

const TotalHarga = ({ totalPrice }) => {
  return (
    <>
      {/* Mobile version */}
      <div className="fixed right-0 bottom-0 left-0 z-10 flex h-30 flex-col bg-emerald-500 p-4 text-white lg:hidden">
        <div className="flex justify-between">
          <p className="font-medium">Total Harga</p>
          <p className="font-bold">Rp {totalPrice.toLocaleString()}</p>
        </div>
        <Link
          to="/checkout"
          className="mt-4 flex h-10 w-full items-center justify-center rounded-lg bg-white py-1 text-white hover:bg-gray-500"
        >
          <p className="text-base font-bold text-emerald-500">Checkout</p>
        </Link>
      </div>

      {/* Desktop version */}
      <div className="hidden lg:sticky lg:bottom-4 lg:z-10 lg:flex lg:h-40 lg:w-full lg:max-w-lg lg:flex-col lg:rounded-lg lg:bg-emerald-500 lg:p-4 lg:text-white">
        <div className="flex grow justify-between border-b-2 border-black">
          <p className="font-medium">Total Harga</p>
          <p className="font-bold">Rp {totalPrice.toLocaleString()}</p>
        </div>
        <Link
          to="/checkout"
          className="mt-2 w-full self-end rounded-lg bg-white py-2 text-center text-lg font-bold text-emerald-500 hover:bg-gray-500"
        >
          Checkout
        </Link>
      </div>
    </>
  );
};

export default TotalHarga;
