import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import SearchBar from "../Components/SearchBar";
import HeaderPreLogin from "../Components/HeaderPreLogin";
import RekomendasiCard from "../Components/RekomendasiCard";
import KantinCard from "../Components/KantinCard";

const HomePagePreLogin = () => {
  // Data dummy untuk kantin
  const canteens = [
    { id: 1, name: "Kantin A", faculty: "Fakultas Ilmu Komputer" },
    { id: 2, name: "Kantin B", faculty: "Fakultas Teknik" },
    { id: 3, name: "Kantin C", faculty: "Fakultas Ekonomi" },
    { id: 4, name: "Kantin D", faculty: "Fakultas Hukum" },
    { id: 5, name: "Kantin E", faculty: "Fakultas Kedokteran" },
    { id: 6, name: "Kantin f", faculty: "Fakultas CocokTanam" },
    { id: 7, name: "Kantin g", faculty: "Fakultas CocokTanam" },
  ];

  // Data dummy untuk makanan
  const foods = [
    { id: 1, name: "Nasi Goreng", price: "Rp 15.000" },
    { id: 2, name: "Mie Goreng", price: "Rp 12.000" },
    { id: 3, name: "Ayam Bakar", price: "Rp 20.000" },
    { id: 4, name: "Sate Ayam", price: "Rp 18.000" },
    { id: 5, name: "Gado-Gado", price: "Rp 15.000" },
    { id: 6, name: "Soto Ayam", price: "Rp 16.000" },
    { id: 7, name: "Bakso", price: "Rp 15.000" },
    { id: 8, name: "Rawon", price: "Rp 15.000" },
    { id: 9, name: "Mie Ambutani", price: "Rp 15.000" },
    { id: 10, name: "Mie Ayam", price: "Rp 15.000" },
  ];

  return (
    <div className="w-full min-h-screen mx-auto bg-white">
      {/* Header */}

      <HeaderPreLogin />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-80">
        <div className="absolute inset-0 bg-[url('./assets/HomePage.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center h-full p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white drop-shadow-md md:text-4xl">
            Pesan Makanan Lebih Mudah di Fakultasmu
          </h2>
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Toko Kantin */}
      <section className="p-3">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Toko Kantin di Fakultas</h2>
          <button className=" text-sm border-2  bg-emerald-500 rounded-2xl px-5 py-1 text-white ">
            Lihat Semua
          </button>
        </div>

        <div className="pb-2 overflow-x-auto">
          <div className="inline-flex space-x-3">
            {canteens.map((kantin) => (
              <KantinCard key={kantin.id} kantin={kantin} />
            ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi Hari Ini - Hybrid Scroll/Wrap */}
      <section className="p-4 mx-auto max-w-7xl">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Rekomendasi Hari Ini
        </h2>

        {/* Mobile - Horizontal Scroll */}
        <div className="md:hidden">
          <div className="pb-4 overflow-x-auto">
            <div
              className="inline-flex space-x-4"
              style={{ minWidth: `${foods.length * 176}px` }}
            >
              {foods.map((food) => (
                <div key={food.id} className="flex-shrink-0 w-40">
                  <RekomendasiCard food={food} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop - Grid Layout */}
        <div className="hidden grid-cols-2 gap-4 md:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {foods.map((food) => (
            <RekomendasiCard key={food.id} food={food} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePagePreLogin;
