import React from "react";

const Stats = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-[90%] mt-[1rem] ">
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">HP</span>
          </div>

          <div className="w-[50%] flex items-center">
            <p className="">{pokemon[0].hp}</p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div
            className="w-[50%]"
          >
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Defense
            </span>
          </div>
          <div className="w-[50%] flex items-center">
            <p>{pokemon[0].defense}</p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Sp. Defense
            </span>
          </div>
          <div className="w-[50%] flex items-center">
            <p>{pokemon[0].special_defense}</p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">Attack</span>
          </div>
          <div className="w-[50%] flex items-center gap-2">
            <p>{pokemon[0].attack}</p>
          </div>
        </div>
        <div className="flex gap-[3rem] mb-[.4rem]">
          <div className="w-[50%]">
            <span className="text-lg font-semibold text-[#b8bcd1]">
              Sp. Attack
            </span>
          </div>
          <div className="w-[50%] flex items-center gap-2">
            <p>{pokemon[0].special_attack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
