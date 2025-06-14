import React from "react";
import { Link } from "react-router-dom";

const KantinCard = ({ kantin }) => {
  return (
    <Link to={`/kantin/${kantin.id}`} style={{ textDecoration: "none" }}>
      <div
        key={kantin.id}
        className="flex h-25 min-w-80 cursor-pointer items-center rounded-lg p-4 shadow-md transition-all hover:scale-[1.02]"
      >
        <div className="mr-4 h-20 w-20 rounded-md bg-gray-100"></div>
        <div>
          <h3 className="text-lg font-medium">{kantin.nama || `Kantin`}</h3>
          <p className="text-base text-gray-500">
            {kantin.fakultas || "Fakultas"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default KantinCard;
