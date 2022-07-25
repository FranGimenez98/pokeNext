import React, { useState } from "react";
import About from "./About";
import Moves from "./Moves";
import Stats from "./Stats";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Pokemon({ pokemon, specie, pokeTypes }) {
  const [about, setAbout] = useState(true);
  const [stats, setStats] = useState(false);
  const [moves, setMoves] = useState(false);
  const [types, setTypes] = useState(pokeTypes);

  const handleAboutActive = () => {
    setAbout(!about);
    setStats(false);
    setMoves(false);
  };

  const handleStatsActive = () => {
    setStats(!stats);
    setAbout(false);
    setMoves(false);
  };

  const handleMovesActive = () => {
    setMoves(!moves);
    setStats(false);
    setAbout(false);
  };

  console.log(specie);
  return (
    <div className="md:w-[70%] w-[90%] m-auto flex flex-col items-center">
      <div className="w-full h-[23rem] flex flex-col items-center">
        <div className="w-full relative">
          <Link href="/">
            <FaLongArrowAltLeft className="text-[#b8bcd1] text-[2rem] absolute left-0 top-[1rem]" />
          </Link>

          <div>
            <h2 className="text-4xl font-semibold text-[#f7ba15] absolute left-0 top-[3rem]">
              {" "}
              {pokemon[0].name.slice(0).charAt(0).toUpperCase()}
              {pokemon[0].name.slice(1)}
            </h2>
          </div>
          <span className="text-2xl font-semibold text-[#b8bcd1] absolute right-0  top-[5.5rem]">
            #{pokemon[0].id}
          </span>
        </div>
        <img
          src={pokemon[0].image}
          className="absolute z-10 h-[20rem] top-[4.5rem] md:top-[3rem]"
        />
      </div>

      <div className="flex flex-col items-center w-full mt-[1rem]">
        <div className="w-[60%] flex justify-between m-auto border-b-red-900 mt-[1rem]">
          {about ? (
            <div>
              <span className="text-yellow-400 font-semibold">About</span>
            </div>
          ) : (
            <div
              className="text-gray-400 font-semibold"
              onClick={() => handleAboutActive()}
            >
              <span className="font-semibold">About</span>
            </div>
          )}
          {stats ? (
            <div>
              <span className="text-yellow-400 font-semibold">Base Stats</span>
            </div>
          ) : (
            <div
              className="text-gray-400 font-semibold"
              onClick={() => handleStatsActive()}
            >
              <span className="font-semibold">Base Stats</span>
            </div>
          )}
          {moves ? (
            <div>
              <span className="text-yellow-400 font-semibold">Moves</span>
            </div>
          ) : (
            <div
              className="text-gray-400 font-semibold"
              onClick={() => handleMovesActive()}
            >
              <span className="font-semibold">Moves</span>
            </div>
          )}
        </div>
        <div className="w-[90%] md:w-[90%] md:flex md:justify-center">
          {about && <About pokemon={pokemon} specie={specie} />}
          {stats && <Stats pokemon={pokemon} />}
          {moves && <Moves pokemon={pokemon} />}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { name } = context.params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (response) => response.json()
  );

  const arr = [];
  arr.push(data);

  const pokemon = arr.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      image: poke.sprites.other.home.front_default,
      height: poke.height,
      weight: poke.weight,
      types: poke.types.map((x) => {return {
        name: x.type.name
      }}),
      moves: poke.moves.map((x) => {
        return {
          name: x.move.name,
        };
      }),
      stats: poke.stats,
      hp: poke.stats[0].base_stat,
      attack: poke.stats[1].base_stat,
      defense: poke.stats[2].base_stat,
      special_attack: poke.stats[3].base_stat,
      special_defense: poke.stats[4].base_stat,
      speed: poke.stats[5].base_stat,
      abilities: poke.abilities.map((x) => {
        return {
          name: x.ability.name,
        };
      }),
      species: poke.species.name,
    };
  });

  const fetchSpecies = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  ).then((response) => response.json());
  const arr2 = [];
  arr2.push(fetchSpecies);

  const specie = arr2.map((poke) => {
    return {
      egg_groups: poke.egg_groups.map((group) => {
        return { name: group.name };
      }),
    };
  });

  console.log(pokemon);

  // const evo = pokemonSpecie[0].evolution_chain;
  // const fetchEvo = await fetch(evo).then((response) => response.json());
  // const getEvos = fetchEvo?.chain?.evolves_to?.map((poke) => {
  //   return {
  //     second:poke?.evolves_to[0]?.species?.name,
  //     third: poke?.species?.name,
  //   }
  // })
  // console.log(getEvos);

  const fetchTypes = await fetch(`https://pokeapi.co/api/v2/type`)
    .then((response) => response.json())
    .then((data) => data.results);
  const pokeTypes = fetchTypes
    .map((type) => {
      return {
        name: type.name,
      };
    })
    .filter((e) => e.name !== "unknown" && e.name !== "shadow");

  return {
    props: { pokemon, specie, pokeTypes },
  };
}
