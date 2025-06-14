import React from "react";

const CheckoutCard = ({
  image,
  itemName = "Food Card",
  quantity = 1,
  price = 15000,
}) => {
  const totalPrice = quantity * price;

  return (
    <div className={`flex min-h-12 border-b border-gray-200 p-2`}>
      {/* Item Image - sekarang menggunakan tag img */}
      <div className="h-10 w-12 overflow-hidden rounded-md">
        {image ? (
          <img
            src={image}
            alt={itemName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-red-500"></div>
        )}
      </div>

      {/* Item Details */}
      <div className="flex w-full justify-between px-2">
        {/* Item Name */}
        <div className="text-sm font-medium">{itemName}</div>

        {/* Price Information */}
        <div className="flex flex-col items-end justify-between">
          <div className="text-sm text-gray-600">
            {quantity} x Rp{price.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-black">
            Rp{totalPrice.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
