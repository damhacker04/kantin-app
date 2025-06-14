import React from "react";
import Header from "../Components/Header";
import DetailTransaksiCard from "../Components/DetailTransaksiCard";
import { Link } from "react-router-dom";
const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full">
      <main className="flex min-h-screen flex-col">
        <Header />
        <div className="w-full bg-emerald-100">
          <section className="relative mx-auto my-8 max-h-80 min-h-fit max-w-lg">
            <Link to="/ChangeProfile" className="absolute right-5 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 transition-colors hover:stroke-emerald-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1   "
              stroke="currentColor"
              class="mx-auto size-40"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-bold">Nama</div>
              <div className="text-2xl font-bold">NIM</div>
            </div>
          </section>
        </div>
        <div className="mx-auto mt-2 flex w-full max-w-lg flex-1 flex-col items-center">
          <div className="w-full space-y-4 p-4">
            <DetailTransaksiCard lt={"Nama"} rt={"Nama"} />
            <DetailTransaksiCard lt={"Nim"} rt={"1234567890"} />
            <DetailTransaksiCard lt={"Email"} rt={"Email@Email.com"} />
            <DetailTransaksiCard lt={"No Telepon"} rt={"+62 123-4567-890"} />
          </div>
          <div className="flex w-full flex-col">
            <Link
              className="rounded-2xl p-4 hover:bg-emerald-200"
              to="/ChangePassword"
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
                <div className="text-lg font-medium">Change Password</div>
              </div>
            </Link>
            <Link className="rounded-2xl p-4 hover:bg-red-200" to="/Logout">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>

                <div className="text-lg font-medium">Log Out</div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
