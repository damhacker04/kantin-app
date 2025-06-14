import React from "react";
import { Link } from "react-router-dom";

const StatusCard = ({ order }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Belum Bayar":
        return "bg-amber-100 text-amber-800";
      case "Diproses":
        return "bg-blue-100 text-blue-800";
      case "Siap Ambil":
        return "bg-purple-100 text-purple-800";
      case "Selesai":
        return "bg-green-100 text-green-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="w-full min-w-80 rounded-lg bg-white p-4 shadow-sm md:border md:border-gray-300">
      <div className="flex justify-between">
        <h2 className="font-bold text-emerald-600">{order.id}</h2>
        <span
          className={`rounded px-2 py-1 text-xs font-medium ${getStatusStyles(
            order.status,
          )}`}
        >
          {order.status}
        </span>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <p>Toko: {order.store}</p>
        <p>Tanggal: {order.date}</p>
        <p className="font-medium">Total: Rp {order.total.toLocaleString()}</p>
      </div>

      <div className="mt-2 border-t pt-2">
        {order.items.map((item, index) => (
          <p key={index} className="text-sm">
            {item}
          </p>
        ))}
      </div>

      {order.action && (
        <Link
          to="/Checkout"
          state={{ orderData: order }} //opsional
          className="mt-3 block w-full rounded-lg bg-emerald-500 py-2 text-center text-white hover:bg-emerald-600"
        >
          {order.action}
        </Link>
      )}
    </div>
  );
};

export default StatusCard;
