import React from "react";

const DetailTransaksiCard = ({ rt, lt }) => {
  return (
    <div className="flex justify-between text-wrap">
      <div className="font-medium text-black"> {lt}</div>
      <div className="font-light text-gray-500">{rt}</div>
    </div>
  );
};

export default DetailTransaksiCard;
