import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccessPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <div className="flex max-w-md flex-col items-center rounded-xl p-8">
        {/* Icon sukses */}
        <div className="mb-6 flex flex-col items-center justify-center rounded-full bg-emerald-100 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={3}
            stroke="currentColor"
            className="h-20 w-20 stroke-emerald-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </div>

        {/* Pesan */}
        <h2 className="text-2xl font-bold text-emerald-500">
          Pembayaran Berhasil
        </h2>
        <p className="my-4 text-center text-gray-600">
          Pesanan kamu sedang diproses oleh penjual.<br></br> Silakan cek status
          di halaman profil.
        </p>

        {/* Tombol navigasi */}
        <Link
          to="/HomePage"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-2 text-pretty text-white transition hover:bg-emerald-600"
        >
          <div cla>Kembali ke Beranda</div>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
