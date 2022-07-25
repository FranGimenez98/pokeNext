import { useState } from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokeData }) => {
  if (!pokeData.length) {
    return (
      <div className="w-full flex flex-col items-center mt-12 relative">
        Error
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mt-12 md:mt-0 relative">
      <div className="grid m-auto grid-cols-1 md:grid-cols-3 gap-[4rem]">
        {pokeData?.map((poke) => (
          <PokeCard
            name={poke.name}
            img={poke.image}
            types={poke.types}
            key={poke.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PokeList;
