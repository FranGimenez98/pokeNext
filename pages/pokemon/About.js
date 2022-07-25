import React from "react";

const About = ({ pokemon, specie }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      {/* <div>
        <h2 className="text-2xl font-semibold text-white">
          {" "}
          {pokemon[0].name.slice(0).charAt(0).toUpperCase()}
          {pokemon[0].name.slice(1)}
        </h2>
      </div> */}
      <div className="w-[100%] mt-[1rem]">
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div>
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Species
            </span>
          </div>

          <div className="flex items-center">
            <p className="">
              {pokemon[0].species.slice(0).charAt(0).toUpperCase()}
              {pokemon[0].species.slice(1)}
            </p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="">
            <span className="text-lg font-semibold text-[#b8bcd1]">Height</span>
          </div>
          <div className=" flex items-center">
            <p>
              {pokemon[0].height
                ?.toString()
                .slice(0, pokemon[0].height?.toString().length - 1)}.
              {pokemon[0].height
                ?.toString()
                .slice(
                  pokemon[0].height?.toString().length - 1,
                  pokemon[0].height.toString().length
                )} m
            </p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[20%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">Weight</span>
          </div>
          <div className="w-[80%] flex items-center">
            <p>
              {pokemon[0].weight
                ?.toString()
                .slice(0, pokemon[0].weight?.toString().length - 1)}.
              {pokemon[0].weight
                ?.toString()
                .slice(
                  pokemon[0].weight?.toString().length - 1,
                  pokemon[0].weight.toString().length
                )} kg
            </p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[20%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Abilities
            </span>
          </div>
          <div className="w-[80%] flex items-center gap-2">
            <p>
              {pokemon[0].abilities[0]?.name.slice(0).charAt(0).toUpperCase()}
              {pokemon[0].abilities[0]?.name.slice(1)},
            </p>
            <p>
              {pokemon[0].abilities[1]?.name.slice(0).charAt(0).toUpperCase()}
              {pokemon[0].abilities[1]?.name.slice(1)}
            </p>
          </div>
        </div>

        <div className="flex gap-[3rem] mt-[2rem] mb-[.4rem]">
          <div className="w-[20%]">
            <span className="text-2xl font-semibold text-[#b8bcd1]">
              Aditional
            </span>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Types
            </span>
          </div>
          <div className="w-[50%] flex items-center gap-2">
            {pokemon[0].types.map((type, index) => (
              <p key={index}>{type.name.slice(0).charAt(0).toUpperCase()}{type.name.slice(1)}</p>
            ))}
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Egg group
            </span>
          </div>
          <div className="w-[50%] flex items-center gap-2">
            {specie[0].egg_groups.map((egg, index) => (
              <p key={index}>{egg.name.slice(0).charAt(0).toUpperCase()}{egg.name.slice(1)}</p>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
