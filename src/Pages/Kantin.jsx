import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import KantinCard from "../Components/KantinCard";

const Kantin = () => {
  const [canteens, setCanteens] = useState([]);

  useEffect(() => {
    axios.get(`${BASE}/kantin`).then((res) => {
      /* alias id_toko → id  dan nama         */
      const mapped = res.data.map((t) => ({
        id:   t.id_toko,
        nama: t.nama,             // ← ini kolom alias dari controller
        fakultas: "",             // baris kedua—biarkan kosong
      }));
      setCanteens(mapped);        // ⬅️ kita set di sini
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="mx-auto w-full max-w-lg flex-1 p-4 md:p-8">
        <SearchBar />
        <div className="mt-6 space-y-4">
         {canteens.map((kantin) => (
  <KantinCard
    key={kantin.id_toko}
    kantin={{ ...kantin, id: kantin.id_toko }} // inject "id" agar compatible
  />
))}
        </div>
      </main>
    </div>
  );
};

export default Kantin;
