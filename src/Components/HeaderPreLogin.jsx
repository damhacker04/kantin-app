import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import SideMenuPreLogin from "./SideMenuPreLogin";

function HeaderPreLogin() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getTitle = () => {
    switch (location.pathname) {
      case "/login":
        return "Login";
      case "/register":
        return "Register";
      case "/profile":
        return "Profile";
      default:
        return "Pre Home Page";
    }
  };

  return (
    <header className="flex py-4 px-8  text-white bg-emerald-500">
      <div className="flex items-center space-x-4 w-full">
        <button
          className="rounded hover:bg-emerald-400"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-bold">NgantinYUK!</h1>
      </div>

      {/* SideMenu sebagai komponen terpisah */}
      <SideMenuPreLogin isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default HeaderPreLogin;
