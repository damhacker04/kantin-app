/* src/Pages/ChangeProfilePage.jsx */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import FormInput from "../Components/FormInput";
import { useAuth } from "../Auth/AuthContext"; // pastikan hook ini sudah ada

const ChangeProfilePage = () => {
  const navigate = useNavigate();
  const { user, token, updateUser } = useAuth();

  /* ───── state form ───── */
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  /* isi form dg data pengguna yg login */
  useEffect(() => {
    if (user) {
      setNama(user.nama_lengkap ?? "");
      setEmail(user.email ?? "");
    }
  }, [user]);

  /* ───── submit ───── */
  const handleSave = async () => {
    try {
      setSaving(true);
      await axios.put(
        `http://localhost:8000/api/pembeli/${user.id_pembeli}`,
        { nama_lengkap: nama.trim(),           // ✅ sesuai Laravel
         email:       email.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // sinkronkan context auth di front‑end
      updateUser({
  ...user,
  nama_lengkap: nama.trim(),
  email:       email.trim(),
});

      alert("Profil berhasil di‑update");
      navigate("/Profil");
    } catch (e) {
      console.error("❌ update profil:", e.response?.data || e);
      alert("Gagal menyimpan perubahan");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      <Header />

      <main className="mx-auto mt-10 flex max-w-lg flex-col items-center px-4 pb-24">
        {/* avatar */}
        <div className="flex items-center space-x-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6a3 3 0 100 6 3 3 0 000-6zM4.5 20.25a7.5 7.5 0 0115 0"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">Tambah Foto</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-6 stroke-gray-500 hover:stroke-emerald-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>

        <h1 className="mt-8 mb-6 text-2xl font-bold">Ubah Profile</h1>

        {/* ───── form ───── */}
        <div className="w-full space-y-4">
          <div>
            <label className="pl-1 font-medium">Nama</label>
            <FormInput
              placeholder="Masukkan Nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full rounded-lg border p-3 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="pl-1 font-medium">Email</label>
            <FormInput
              placeholder="Masukkan Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border p-3 focus:ring-emerald-500"
              required
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-4 w-full rounded-lg bg-emerald-500 py-2 text-white hover:bg-emerald-600 disabled:opacity-60"
          >
            {saving ? "Menyimpan…" : "Simpan Perubahan"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default ChangeProfilePage;
