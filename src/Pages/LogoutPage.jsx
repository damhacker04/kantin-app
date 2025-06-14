import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const LogoutPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center">
        <div className="flex w-full max-w-lg flex-col items-center space-y-4 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="h-20 w-20 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>

          <h2 className="text-xl font-semibold">Yakin Ingin Keluar Akun?</h2>
          <p className="text-gray-600">Kamu akan kembali ke halaman login</p>

          <div className="mt-4 flex w-full flex-col space-y-2">
            <Link
              to="/login"
              className="flex h-10 w-full items-center justify-center rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              <div className="font-medium">Keluar Akun</div>
            </Link>
            <Link
              to="/Profil"
              className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-200 text-black hover:bg-gray-400"
            >
              <div className="font-medium">Batal</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
