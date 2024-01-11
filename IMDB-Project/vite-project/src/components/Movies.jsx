import React from "react";
import MovieCard from "./MovieCard";

function Movies() {
  return (
    <div>
      <div className="text-3xl font-bold text-center m-6">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-10">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Movies;
