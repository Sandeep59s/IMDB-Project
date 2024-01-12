import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3c0663862f176fd54680f4606742f2e0&language=en-US"
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div>
      <div style={{color :'#ff0000'}} className="text-3xl font-bold text-center m-6">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex justify-evenly flex-wrap gap-6">
        {movies.map(function (movieObject) {
          return (
            <MovieCard
              name={movieObject.title}  
            //   this are props
              posterPath={movieObject.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
