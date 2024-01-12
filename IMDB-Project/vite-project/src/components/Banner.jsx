import React from "react";

function Banner() {
  return (
    <div
      className="h-[15vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://shorturl.at/dwx01)",
      }}
    >
      <div className="text-white w-full text-center text-3xl">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
