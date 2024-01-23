import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const nextPageCtr = () => {
    setPageNo(pageNo + 1);
  };

  const prevPageCtr = () => {
    if (pageNo === 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3c0663862f176fd54680f4606742f2e0&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        // console.log(res);
      });
  }, [pageNo]);

  return (
    <>
      <div>
        <div
          style={{ color: "#ff0000" }}
          className="text-3xl font-bold text-center m-6"
        >
          <h1>Trending Movies</h1>
        </div>

        <div className="flex justify-evenly flex-wrap gap-6">
          {movies.map(function (movieObject) {
            return (
              <MovieCard
                //   this are props

                movieObject={movieObject}
                
              />
            );
          })}
        </div>

        <Pagination
          nextPageFn={nextPageCtr}
          prevPageFn={prevPageCtr}
          pageNumber={pageNo}
        />
      </div>
    </>
  );
}

export default Movies;
