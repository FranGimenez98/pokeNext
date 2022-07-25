import { data } from "autoprefixer";
import Head from "next/head";
import { useState } from "react";
import Paginate from "../components/Paginate";
import PokeList from "../components/PokeList";
import PokeTypes from "../components/PokeTypes";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";

export default function Home({ pokeData, pokeTypes }) {
  const [pokemon, setPokemon] = useState(pokeData);
  const [types, setTypes] = useState(pokeTypes);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(12);

  const indexOfLastRecipe = currentPage * pokemonPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - pokemonPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstRecipe, indexOfLastRecipe);
  
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterType = (e) => {
    const filter =
      e.target.value === "all"
        ? pokeData
        : pokeData.filter((x) => x.types[0].name.includes(e.target.value));
    setPokemon(filter);
  };

  return (
    <>
      <Head>
        <title>Pokenext</title>
        <meta name="description" content="Pokemons in NextJS" />
      </Head>
      <div className="w-full flex flex-col">
 
      <div className="md:w-[70%] w-[90%] m-auto" >
        <Topbar />

        <Searchbar pokeData={pokemon} />
        <PokeTypes types={types} filter={filterType} isOpen={isOpen} handleOpen={handleOpen}/>
        <PokeList pokeData={currentPokemon} pokeTypes={pokeTypes} />
        <Paginate
          paginate={paginate}
          pokemonPerPage={pokemonPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pokemon={pokemon.length}
        />
      </div>
      </div>
    </>
  );
}

export async function getServerSideProps(props) {
  //Firts generation
  const fetchPokemons = async (number) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((res) => res.json())
      .then((data) => data);
  };

  let pokeArray = [];
  for (let i = 1; i <= 151; i++) {
    let data = await fetchPokemons(i);
    pokeArray.push(data);
  }

  const pokeData = pokeArray.map((poke) => {
    return {
      id: poke.id,
      name: poke.name,
      image: poke.sprites.other.home.front_default,
      types: poke.types.map((x) => {
        return {
          name: x.type.name,
        };
      }),
    };
  });

  //Types
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
    props: {
      pokeData,
      pokeTypes,
    },
  };
}
