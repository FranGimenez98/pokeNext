import React, { useState } from "react";
import Link from "next/link";
import { MdSearch, MdClose } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Searchbar = ({ pokeData }) => {
  const [pokemon, setPokemon] = useState(pokeData);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  console.log(input);

  const handleFilter = (e) => {
    const filter =
      e.target.value === ""
        ? []
        : pokemon.filter((value) => {
            return value.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
    setInput(e.target.value);
    setFilteredData(filter);
  };

  const handleDelete = (e) => {
    setInput({ input: e.target.value === "" });
  };

  return (
    <div className="mt-[3rem] mb-[1rem]">
      <div
        className={`flex  justify-between items-center p-2 rounded-md w-[15rem] bg-[#353d65] text-white shadow-lg ${
          filteredData.length != 0 && "rounded-b-none"
        }`}
      >
        <input
          type="text"
          placeholder="Search your Pokemon"
          onChange={handleFilter}
          value={input}
          className={`w-[90%] outline-none bg-transparent text-white `}
        />
        {input.length != 0 ? (
          <MdClose className="text-2xl " onClick={() => setInput("")} />
        ) : (
          <MdSearch className="text-2xl " />
        )}
        {/* <MdSearch className="text-2xl " /> */}
      </div>
      {filteredData.length != 0 && (
        <div
          className={`w-[15rem]  p-2 rounded-b-md absolute z-20 bg-[#353d65] shadow-lg max-h-[8rem] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-md`}
        >
          {filteredData.slice(0, 10).map((poke, index) => (
            <Link
              href={{
                pathname: `/pokemon/[name]`,
                query: { name: poke.name },
              }}
              key={index}
            >
              <p className="cursor-pointer text-sm mb-1">
                {poke.name.slice(0).charAt(0).toUpperCase()}
                {poke.name.slice(1)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
