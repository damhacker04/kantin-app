/* src/Pages/KantinDetail.jsx */
import { useParams }   from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart }     from "../CartContext";

import Header    from "../Components/Header";
import SearchBar from "../Components/SearchBar";
import MenuCard  from "../Components/MenuCard";

import axios from "axios";

const KantinDetail = () => {
  const { id } = useParams();        // id kantin di URL
  const { addItem } = useCart();     // fungsi keranjang

  const [menus, setMenus]         = useState([]);
  const [kantinName, setKantinName] = useState("Loading...");

  /* ───────────── fetch menu kantin ───────────── */
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/kantin/${id}`)
      .then((res) => {
        /* pastikan setiap menu punya id UNIK: "<idKantin>-<idMenu>" */
        const processed = (res.data.menu || []).map((m) => ({
          id:          `${id}-${m.id_menu ?? m.id}`, 
          menuId:      m.id_menu,  // 🔑 id unik
          title:       m.nama_menu,
          description: m.deskripsi,
          price:       m.harga,
          image:       m.image || "",
        }));
        setMenus(processed);

        /* fallback bila backend tak mengirimkan nama kantin */
        setKantinName(res.data.name || `Kantin ${id}`);
      })
      .catch((err) => {
        console.error("❌ Gagal fetch kantin:", err);
        setMenus([]);
        setKantinName(`Kantin ${id}`);
      });
  }, [id]);
  /* ───────────────────────────────────────────── */

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="mx-auto w-full max-w-lg flex-1 p-4">
        {/* judul / banner kantin */}
        <div className="flex min-h-20 flex-col items-center justify-center bg-gray-600">
          <h2 className="text-4xl font-bold text-white">{kantinName}</h2>
        </div>

        {/* kotak pencarian + daftar menu */}
        <div className="mx-auto w-full max-w-lg flex-1 p-4">
          <SearchBar />
          <div className="my-6 space-y-4">
            {menus.map((menu) => (
              <MenuCard
                key={menu.id}                       
                image={menu.image}
                title={menu.title}
                description={menu.description}
                price={`Rp ${Number(menu.price).toLocaleString("id-ID")}`}
                onAdd={() => addItem(menu)}        
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default KantinDetail;
