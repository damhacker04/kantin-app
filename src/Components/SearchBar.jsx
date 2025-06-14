import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="w-full max-w-lg">
      <div className="relative">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Cari Menu"
          className="w-full py-4 pl-12 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 bg-gray-200 rounded-xl"
        />
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-4 top-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
