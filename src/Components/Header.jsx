/* src/Components/Header.jsx */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../CartContext";   // ✅ ambil context
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  /* ----------------------------------------------------------
     items SELALU array karena CartProvider-mu menginisialisasi
     [], tapi untuk jaga-jaga tetap kasih default.
  ---------------------------------------------------------- */
  const { items = [] } = useCart?.() ?? { items: [] };

  return (
    <header className="sticky top-0 z-10 flex h-20 items-center
                       justify-between bg-emerald-500 p-4 text-white">
      {/* === kiri: tombol burger + judul ================================= */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleMenu}
          className="rounded p-2 hover:bg-emerald-400"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="size-6" fill="none">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">NgantinYUK!</h1>
      </div>

      {/* === kanan: ikon keranjang + badge ============================== */}
      <Link to="/CartPage" className="relative rounded p-2 hover:bg-emerald-400">
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className="size-6" fill="none">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0
                   .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0
                   .75.75 0 0 1 1.5 0Z" />
        </svg>

        {/* badge hanya tampil kalau ada isi */}
        {items.length > 0 && (
          <span
            className="absolute -right-1 -top-1 flex h-4 min-w-4 
                       items-center justify-center rounded-full
                       bg-red-500 px-1 text-xs font-bold leading-none"
          >
            {items.length}
          </span>
        )}
      </Link>

      {/* === side menu ================================================== */}
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
