/* src/Pages/HomePage.jsx */
import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import KantinCard from "../Components/KantinCard";
import RekomendasiCard from "../Components/RekomendasiCard";

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(angka));
const HomePage = () => {
  /* ---------- State ---------- */
  const [canteens, setCanteens] = useState([]);   // data kantin
  const [foods, setFoods]       = useState([]);   // data menu / rekomendasi

  const [loadingCanteen, setLoadingCanteen] = useState(true);
  const [loadingFoods, setLoadingFoods]     = useState(true);

  /* ---------- Base URL ---------- */
  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

  /* ---------- Ambil data sekali saat mount ---------- */
  useEffect(() => {
    /* ---- Kantin ---- */
    axios
      .get(`${BASE_URL}/kantin`)
      .then((res) => {
        console.log("RAW KANTIN:", res.data); 
        const raw = Array.isArray(res.data) ? res.data : res.data.data;

        // ✨ ALIAS agar KantinCard selalu dapat id, name, faculty
        const mapped = raw.map((t) => ({
          ...t,
          id:      t.id_toko,
          name:    t.nama_toko    ,
          fakultas: "Fakultas Ilmu Komputer",
        }));

        setCanteens(mapped);
      })
      .catch((err) => console.error("Fetch kantin gagal:", err))
      .finally(() => setLoadingCanteen(false));

    /* ---- Menu / Rekomendasi ---- */
axios
  .get(`${BASE_URL}/menus`)
  .then((res) => {
    const raw = Array.isArray(res.data) ? res.data : res.data.data;

    /* alias agar setiap elemen pasti { id, name, price } */
    const mapped = raw.map((m) => ({
      id:    m.id       ?? m.id_menu,
      name:  m.name     ?? m.nama_menu ?? m.nama,
      price: m.price    ?? m.harga,            // ← tambahkan baris ini
    }));

    setFoods(mapped);                          // ← simpan yang sudah di-alias
  })
  .catch((err) => console.error("Fetch menu gagal:", err))
  .finally(() => setLoadingFoods(false));

  }, []);

  /* ---------- UI ---------- */
  return (
    <div className="mx-auto min-h-screen w-full bg-white">
      {/* Header */}
      <Header />

      {/* Hero */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('./assets/HomePage.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white drop-shadow-md md:text-4xl">
            Pesan Makanan Lebih Mudah di Fakultasmu
          </h2>
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Daftar Kantin */}
      <section className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold">Toko Kantin di Fakultas</h2>
          <button className="text-sm text-blue-500 transition-colors hover:text-blue-700">
            Lihat Semua
          </button>
        </div>

        <div className="overflow-x-scroll p-2">
          <div className="inline-flex space-x-3">
            {loadingCanteen
              ? Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-24 w-40 flex-shrink-0 animate-pulse rounded-lg bg-gray-200"
                  />
                ))
              : canteens.map((kantin) => (
                  <KantinCard key={kantin.id} kantin={kantin} />
                ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi Hari Ini */}
      <section className="mx-auto max-w-7xl p-4">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Rekomendasi Hari Ini
        </h2>

        {/* Mobile – scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto pb-4">
            <div className="inline-flex space-x-4">
              {loadingFoods
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-40 w-40 flex-shrink-0 animate-pulse rounded-lg bg-gray-200"
                    />
                  ))
                : foods.map((food) => (
                    <div key={food.id} className="w-40 flex-shrink-0">
                      <RekomendasiCard food={food} />
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Desktop – grid */}
        <div className="hidden grid-cols-2 gap-4 sm:grid-cols-3 md:grid lg:grid-cols-4 xl:grid-cols-5">
          {loadingFoods
            ? Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 w-full animate-pulse rounded-lg bg-gray-200"
                />
              ))
            : foods.map((food) => <RekomendasiCard key={food.id} food={food} />)}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
