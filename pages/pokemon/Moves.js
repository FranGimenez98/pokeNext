import React from "react";

const Moves = ({ pokemon }) => {
  return (
    <div className="flex flex-col  mt-4">
      <div className="mt-[1rem] flex flex-col items-center ">
        {pokemon[0].moves.map((e, index) => (
          <div
            className="flex justify-center gap-[3rem] mb-[.4rem]"
            key={index}
          >
            <div className="flex items-center">
              <p className="">
                {e.name.slice(0).charAt(0).toUpperCase()}
                {e.name.slice(1)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moves;
