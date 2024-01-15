import React from "react";

function MovieCard({ movieObject, handleAddToWatchList, watchlist }) {
  function doesContain(movieObject) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObject.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="relative h-[50vh] w-[210px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-700"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObject.poster_path})`,
      }}
    >
      {/* using ternary opertor */}
      
      {doesContain(movieObject) ? (
        <div
          // onClick={() => handleAddToWatchList(movieObject)}
          className="absolute top-2 right-2 text-white text-xl hover:text-red-500 hover:scale-150 duration-500"
        >
          <button> &#10060;</button>
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObject)}
          className="absolute top-2 right-2 text-white text-xl hover:text-red-500 hover:scale-150 duration-500"
        >
          <button> &#128525;</button>
        </div>
      )}

      <div
        style={{ color: "red" }}
        className="text-white w-full text-xl text-center p-2 bg-gray-900/55 rounded-xl "
      >
        {movieObject.title}
      </div>
    </div>
  );
}

export default MovieCard;
