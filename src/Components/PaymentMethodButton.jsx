/* src/Components/PaymentMethodButton.jsx */
import { useState } from "react";

const PaymentMethodButton = ({ onPay = () => {} }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="space-y-4">
      {/* ───── pilihan metode (Qris) ───── */}
      <button
        type="button"
        onClick={() => setIsSelected(!isSelected)}
        className={`box-border flex min-h-16 w-full items-center rounded-md border-2 p-4 transition-colors duration-200 ${
          isSelected
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
            isSelected ? "bg-emerald-100" : "bg-gray-300"
          }`}
        >
          {isSelected && (
            <div className="h-3 w-3 animate-[pulse_0.5s_ease-in-out] rounded-full bg-emerald-500" />
          )}
        </div>
        <span className="px-2 font-medium">Qris</span>
      </button>

      {/* ───── tombol Bayar (desktop) ───── */}
      <div className="hidden lg:bottom-4 lg:z-10 lg:flex lg:w-full lg:max-w-lg lg:flex-col lg:items-end lg:rounded-lg lg:border-2 lg:p-4 lg:border-gray-300">
        <button
          type="button"
          onClick={onPay}
          disabled={!isSelected}
          className="mt-3 w-full rounded-lg bg-emerald-500 py-2 text-center text-white
                     hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          Bayar
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodButton;
