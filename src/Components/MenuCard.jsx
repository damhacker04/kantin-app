import { Link } from "react-router-dom";

const MenuCard = ({ image, title, description, price, onAdd }) => {
  return (
    <div className="mb-2 flex h-30 min-w-80 items-center-safe space-x-4 rounded-lg p-2 shadow-md">
      {/* Foto */}
      <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-200">
        <img src={image} alt="Foto" className="h-full w-full object-cover" />
      </div>

      {/* Informasi */}
      <div className="flex-1 space-y-2 truncate overflow-hidden">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="max-h-10 max-w-xs overflow-hidden text-sm text-ellipsis whitespace-normal text-gray-600">
          {description}
        </p>
        <p className="text-base font-semibold text-green-500">{price}</p>
      </div>

      {/* Tombol Add */}
      <button
        onClick={onAdd}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white hover:bg-emerald-300"
      >
        +
      </button>
    </div>
  );
};
export default MenuCard;
