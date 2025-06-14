import React from "react";
import Header from "../Components/Header";
import FormInput from "../Components/FormInput";
import FooterCheckout from "../Components/FooterCheckout";
import { Link } from "react-router-dom";
const ChangeProfilePage = () => {
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
              stroke-width="1.5 "
              stroke="currentColor"
              class="size-15"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="text-sm font-medium">Tambah Foto</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              class="size-6 stroke-gray-500 hover:stroke-emerald-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-start space-x-4">
          <div className="mb-4 pl-4 text-2xl font-bold">Ubah Profile</div>
          <div className="w-full p-2">
  <div className="pl-4 font-medium">Nama</div>
  <div>
    <FormInput
      placeholder="Masukkan Nama"
      type="text"
      className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
      required
    />
  </div>
</div>
<div className="w-full p-2">
  <div className="pl-4 font-medium">Email</div>
  <div>
    <FormInput
      placeholder="Masukkan Email"
      type="text"
      className="w-full rounded-lg border p-3 focus:ring-2 focus:ring-emerald-500"
      required
    />
  </div>
</div>
          <div className="hidden lg:bottom-4 lg:z-10 lg:flex lg:w-full lg:max-w-lg lg:flex-col lg:items-end lg:rounded-lg lg:border-2 lg:p-2 lg:text-white">
            <Link
              to="/Profil"
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

export default ChangeProfilePage;
