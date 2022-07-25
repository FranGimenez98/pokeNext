import Link from "next/link";
import Image from "next/image";

const PokeCard = ({ name, img, types }) => {
  return (
    <Link
      href={{
        pathname: `/pokemon/[name]`,
        query: { name: name },
      }}
    >
      {/* <div
        className={`w-[22rem] h-40 rounded-lg shadow-lg flex items-center flex-col relative 
      ${types[0] === "normal" && "bg-[#A8A77A]"}
      ${types[0] === "fire" && "bg-[#EE8130]"}
      ${types[0] === "water" && "bg-[#6390F0]"}
      ${types[0] === "electric" && "bg-[#F7D02C]"}
      ${types[0] === "grass" && "bg-[#7AC74C]"}
      ${types[0] === "ice" && "bg-[#96D9D6]"}
      ${types[0] === "fighting" && "bg-[#C22E28]"}
      ${types[0] === "poison" && "bg-[#A33EA1]"}
      ${types[0] === "ground" && "bg-[#EE8130]"}
      ${types[0] === "flying" && "bg-[#A98FF3]"}
      ${types[0] === "psychic" && "bg-[#F95587]"}
      ${types[0] === "bug" && "bg-[#A6B91A]"}
      ${types[0] === "rock" && "bg-[#B6A136]"}
      ${types[0] === "ghost" && "bg-[#735797]"}
      ${types[0] === "dragon" && "bg-[#6F35FC]"}
      ${types[0] === "dark" && "bg-[#705746]"}
      ${types[0] === "steel" && "bg-[#B7B7CE]"}
      ${types[0] === "fairy" && "bg-[#D685AD]"}`}
      > */}
      <div className="bg-[#353d65] w-[22rem] md:w-[18rem] h-[15rem] rounded-lg shadow-lg flex items-center flex-col relative mt-[4rem]">
        <img className="h-[15rem] md:h-[13rem] absolute bottom-[7.5rem]" src={img} />

        <h2 className="text-[1.6rem] font-semibold mt-[8rem] text-white">
          {name.slice(0).charAt(0).toUpperCase()}
          {name.slice(1)}
        </h2>
        <div className="flex w-[90%] gap-1 items-center justify-center my-2">
          {types.map((type, index) => (
            <Image src={require(`../assets/types/${type.name}.png`)} key={index} height="35px" width="35px"/>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
