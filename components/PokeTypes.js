import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PokeTypes = ({ types, filter, isOpen, handleOpen }) => {
  return (
    <div className="w-full mb-[2rem]">
      {/* <select onClick={(e) => filter(e)}>
        <option value="all">All</option>
        {types.map((type, index) => (
          <option key={index} value={type.name}>
            {type.name.slice(0).charAt(0).toUpperCase()}
            {type.name.slice(1)}
          </option>
        ))}
      </select> */}
      <div
        className={`rounded-md  w-[5.8rem] bg-[#353d65] text-white cursor-pointer ${
          isOpen && "rounded-b-none"
        }`}
        onClick={(e) => handleOpen(e)}
      >
        <div className="px-2 py-[.3rem]  flex justify-between items-center">
          <span>Types</span>
          <div>
            {isOpen ? (
              <FaArrowUp className="text-sm text-[#b8bcd1]" />
            ) : (
              <FaArrowDown className="text-sm text-[#b8bcd1]" />
            )}
          </div>
        </div>
        {isOpen && (
          <div
            className={`${
              isOpen &&
              "bg-[#353d65] w-[5.8rem] absolute flex flex-col z-10 shadow-md h-[7rem] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-md rounded-b-md"
            }`}
          >
            <button className="p-1 text-sm " value="all" onClick={(e) => filter(e)}>
              All
            </button>
            {types.map((type, index) => (
              <button
                className="p-1 text-sm "
                key={index}
                value={type.name}
                onClick={(e) => filter(e)}
              >
                {type.name.slice(0).charAt(0).toUpperCase()}
                {type.name.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeTypes;
