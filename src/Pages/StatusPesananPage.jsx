/* src/Pages/StatusPesananPage.jsx */
import React, { useState, useEffect, useMemo } from "react";
import Header      from "../Components/Header";
import StatusCard  from "../Components/StatusCard";
import axios       from "axios";

/* mapping status DB → label tab */
const LABEL = {
  Unpaid   : "Belum Bayar",
  Pending  : "Belum Bayar",   // kalau masih dipakai
  Process  : "Diproses",
  Ready    : "Siap Ambil",
  Finish   : "Selesai",
  Cancel   : "Dibatalkan",
};

const tabs = [
  "Semua",
  "Belum Bayar",
  "Diproses",
  "Siap Ambil",
  "Selesai",
  "Dibatalkan",
];

const StatusPesananPage = () => {
  const [activeTab, setActiveTab] = useState("Semua");
  const [orders, setOrders]       = useState([]);
  const [loading, setLoading]     = useState(true);

  /* ───────── fetch sekali saat mount ───────── */
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/pesanan");
        /* ubah bentuk sesuai StatusCard */
        const mapped = (res.data || []).map((p) => ({
          id:     `INV-${p.id_pesanan}`,        // contoh invoice
          status: LABEL[p.status] ?? p.status,  // label UI
          store:  p.nama_toko   ?? "—",       // sesuaikan kolom api
          date:   new Date(p.tanggal_pesanan).toLocaleDateString("id-ID",
                    { day:"2-digit", month:"short", year:"numeric" }),
          total:  Number(p.total),
          items:  p.detail?.map(d => `${d.nama_menu} x${d.qty}`) ?? [],
          action: LABEL[p.status] === "Belum Bayar" ? "Bayar Sekarang" : null,
        }));
        setOrders(mapped);
      } catch (err) {
        console.error("❌ gagal fetch pesanan:", err.response?.data || err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ───────── filter berdasar tab ───────── */
  const filtered = useMemo(() => {
    if (activeTab === "Semua") return orders;
    return orders.filter((o) => o.status === activeTab);
  }, [activeTab, orders]);

  /* ───────── UI ───────── */
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* strip tab filter */}
      <div className="sticky top-18 z-5 mb-2 overflow-x-auto bg-gray-50 py-2 shadow-sm shadow-gray-500">
        <div className="mx-auto flex w-max space-x-2 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-emerald-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* daftar pesanan */}
      <div className="mx-auto flex max-w-120 flex-col items-center space-y-4">
        {loading ? (
          <div className="py-12 text-gray-500">Memuat…</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-gray-500">Tidak ada pesanan.</div>
        ) : (
          filtered.map((order) => <StatusCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
};

export default StatusPesananPage;
