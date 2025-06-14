import React from "react";
import { Link } from "react-router-dom";

const FooterCheckout = ({ Lt, Rt, placeholder }) => {
  return (
    // Mobile Payment Button
    <div className="fixed right-0 bottom-0 left-0 z-10 bg-emerald-500 p-4 lg:hidden">
      <div className="mb-2 flex items-center justify-between px-2">
        {/* Left Text (Lt) */}
        <span className="text-lg font-medium text-white">{Lt}</span>
        {/* Right Text (Rt) */}
        <span className="text-lg font-bold text-white">{Rt}</span>
      </div>
      <Link
        to="/payment"
        className="flex h-10 items-center justify-center rounded-lg bg-white hover:bg-gray-100"
      >
        <p className="text-base font-bold text-emerald-500">{placeholder}</p>
      </Link>
    </div>
  );
};

export default FooterCheckout;
