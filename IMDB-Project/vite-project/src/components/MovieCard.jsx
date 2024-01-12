import React from "react";

function MovieCard({ name , posterPath }) {
  return (
    <div
      className="h-[50vh] w-[210px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-700"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
    >
      <div style={{color : 'red'}} className="text-white w-full text-xl text-center p-2 bg-gray-900/55 rounded-xl ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
