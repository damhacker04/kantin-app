import React from "react";
import { Link } from "react-router-dom";   // opsional kalau ingin kartu bisa diklik

/* helper: 15000 → "Rp 15.000" */
const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(angka));

const RekomendasiCard = ({ food }) => {
  const name  = food.name  ?? food.nama_menu;
  const price = food.price ?? food.harga;

  /* Jika nanti ingin detail menu, ganti "#" → `/menu/${food.id}` */
  return (
    <Link to="#" style={{ textDecoration: "none" }}>
      <div
        className="flex h-48 w-full flex-col justify-between overflow-hidden
                   rounded-xl border border-gray-200 bg-white p-4 shadow-sm
                   cursor-pointer transition-all hover:scale-[1.02]"
      >
        {/* placeholder gambar */}
        <div className="h-24 w-full rounded-md bg-gray-100" />

        {/* nama + harga */}
        <div>
          <h3 className="mb-1 truncate text-sm font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-sm font-bold text-emerald-600">
            {formatRupiah(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RekomendasiCard;
