import React from "react";
import Header from "../Components/Header";
import FormInput from "../Components/FormInput";
import { Link } from "react-router-dom";
import FooterCheckout from "../Components/FooterCheckout";
const ChangePasswordPage = () => {
  return (
    <div className="min-h-screen w-full">
      <main className="flex min-h-screen w-full flex-col">
        <Header />
        <div className="mx-auto flex h-40 w-full max-w-lg items-center justify-center space-x-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-start space-x-4">
          <div className="mb-4 pl-4 text-2xl font-bold">Ubah Password</div>
          <div className="w-full p-2">
            <div className="pl-4 font-medium">Password Lama</div>
            <div>
              <FormInput
                placeholder="Masukkan Password Lama"
                type="text"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>
          <div className="w-full p-2">
            <div className="pl-4 font-medium">Password Baru</div>
            <div>
              <FormInput
                placeholder="Masukkan Password Baru"
                type="text"
                className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>
          <div className="hidden lg:bottom-4 lg:z-10 lg:flex lg:w-full lg:max-w-lg lg:flex-col lg:items-end lg:rounded-lg lg:border-2 lg:p-2 lg:text-white">
            <Link
              to="/Profile"
              className="mt-3 block w-full rounded-lg bg-emerald-500 py-2 text-center text-white hover:bg-emerald-600"
            >
              Simpan Perubahan
            </Link>
          </div>
        </div>
        <FooterCheckout placeholder={"Simpan Perubahan"} />
      </main>
    </div>
  );
};

export default ChangePasswordPage;
