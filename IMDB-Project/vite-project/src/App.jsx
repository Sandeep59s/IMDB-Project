import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { useState, useEffect } from "react";

import { MovieContext } from "./components/MovieContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchList = (movieObject) => {
    const updatedWatchlist = [...watchlist, movieObject];
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    console.log(updatedWatchlist);
  };

  const handleDeleteFromWatchList = (movieObject) => {
    const updatedWatchlist = watchlist.filter((movieObj) => (
       movieObj.id !== movieObject.id
    ));
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    const watchListFromLocalStorage = localStorage.getItem("watchlist");
    // edgecase
    if (!watchListFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(watchListFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider value={{handleAddToWatchList , watchlist , handleDeleteFromWatchList , setWatchlist}}>

        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <>
                <Watchlist />
              </>
            }
          />
        </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;

