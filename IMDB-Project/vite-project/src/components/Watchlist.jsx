import React from "react";

function Watchlist({ watchList }) {
  return (
    <>
      {/* genre based filtering purpose */}

      {/* search field */}
      <div className="flex justify-center my-10">
        <input
          className="bg-gray-500 h-[3rem] w-[28rem] px-4 text-2xl border border-2 rounded-xl border-red-900 outline-none "
          type="text"
          placeholder="Search Movies..."
        />
      </div>

      {/* watchlist table */}

      <div className="border m-7   border-2 border-red-900 rounded-xl">
        <table className="w-full  bg-gray-400 text-center rounded-xl">
          <thead className="h-[2rem] ">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Delete Movies</th>
            </tr>
          </thead>
          <tbody className="bg-gray-600/90 rounded-xl">
            {watchList.map((movieObj) => (
              <tr className="border-2 border-red-900 rounded-xl">
                <td className="flex items-center px-6 py-6 ">
                  <img
                    className="h-[7rem] w-[13rem] rounded-lg"
                    src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                    alt=""
                  />
                  <div className="m-2 text-xl">{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>action</td>
                <td style={{ color: "maroon" }}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
