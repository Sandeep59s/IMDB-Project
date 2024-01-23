import React, { useEffect } from "react";
import { useState } from "react";
import genreIds from "../utility/genre";

import {MovieContext} from "./MovieContext";
import { useContext } from "react";

function Watchlist( ) {

  let {watchlist , handleDeleteFromWatchList ,setWatchlist} = useContext(MovieContext)

  const [search, setSearch] = useState("");
  const [genreList, setGenresList] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    // console.log(temp)
    temp = new Set(temp);
    setGenresList(["All Genres", ...temp]);
  }, [watchlist]);

  const handleAscendingRatings = () => {
    let sortedAscending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });

    setWatchlist([...sortedAscending]);
  };

  const handleDescendingRatings = () => {
    let sortedDescending = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });

    setWatchlist([...sortedDescending]);
  };

  const handleAscendingPopularity = () => {
    let sortedAscendingPopularity = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.popularity - movieObjB.popularity;
    });

    setWatchlist([...sortedAscendingPopularity]);
  };

  const handleDescendingPopularity = () => {
    let sortedDescendingPopularity = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.popularity - movieObjA.popularity;
    });

    setWatchlist([...sortedDescendingPopularity]);
  };

  return (
    <>
      {/* genre based filtering purpose */}

      <div className="flex justify-center ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "w-[7rem] h-[3rem]  mx-4 bg-red-700 font-bold  flex justify-center items-center rounded-xl"
                  : "w-[7rem] h-[3rem]  mx-4 font-bold bg-gray-400 flex justify-center items-center rounded-xl"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      {/* search field */}
      <div className="flex justify-center my-10">
        <input
          className="bg-gray-500 h-[3rem] w-[28rem] px-4 text-2xl border border-2 rounded-xl border-red-900 outline-none "
          type="text"
          placeholder="Search Movies..."
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* watchlist table */}

      <div className="border m-7   border-2 border-red-900 rounded-xl">
        <table className="w-full  bg-gray-400 text-center rounded-xl">
          <thead className="h-[2rem] ">
            <tr>
              <th>Name</th>
              <th>
                <i
                  onClick={handleAscendingRatings}
                  class="fa-solid fa-arrow-up"
                ></i>{" "}
                Ratings{" "}
                <i
                  onClick={handleDescendingRatings}
                  class="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>
                <i
                  onClick={handleAscendingPopularity}
                  class="fa-solid fa-arrow-up"
                ></i>{" "}
                Popularity{" "}
                <i
                  onClick={handleDescendingPopularity}
                  class="fa-solid fa-arrow-down"
                ></i>
              </th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="bg-gray-600/90 rounded-xl">
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] === currGenre;
                }
              })
              .filter((movieObj) =>
                movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr className="border-2 border-red-900 rounded-xl">
                  <td className="flex items-center px-6 py-6 ">
                    <img
                      className="h-[7rem] w-[13rem] rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      alt=""
                    />
                    <div className="mx-4 text-xl">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreIds[movieObj.genre_ids[0]]}</td>
                  <td onClick={() =>handleDeleteFromWatchList(movieObj) } style={{ color: "maroon" }}> <button>Delete</button> </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
