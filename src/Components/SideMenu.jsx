import { useEffect } from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay dengan opacity lebih rendah */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300 bg-auto bg-opacity-40"
        onClick={onClose}
      />

      {/* Side Menu dengan background hijau */}
      <div
        className="fixed top-0 left-0 z-50 w-64 h-full transition-transform duration-300 ease-in-out transform shadow-xl bg-emerald-500"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="flex flex-col h-full p-4 text-white">
          {/* Menu Header */}
          <div className="p-4 mb-8 rounded-lg">
            <h2 className="text-xl font-bold">NgantinYUK!</h2>
          </div>

          {/* Menu Items */}
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/HomePage"
                  className="block px-4 py-3 font-medium transition-colors rounded-lg hover:bg-emerald-400"
                  onClick={onClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/StatusPesanan"
                  className="block px-4 py-3 font-medium transition-colors rounded-lg hover:bg-emerald-400"
                  onClick={onClose}
                >
                  Status Pesanan
                </Link>
              </li>
              <li>
                <Link
                  to="/Profil"
                  className="block px-4 py-3 font-medium transition-colors rounded-lg hover:bg-emerald-400"
                  onClick={onClose}
                >
                  Profil Saya
                </Link>
              </li>
              <li>
                <Link
                  to="/Logout"
                  className="block px-4 py-3 font-medium transition-colors rounded-lg hover:bg-emerald-400"
                  onClick={onClose}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="p-4 mt-auto text-sm border-t text-emerald-100 border-emerald-400">
            <p>© NgantinYuk</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
