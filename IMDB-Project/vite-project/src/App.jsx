import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchList = (movieObject) => {
    const updatedWatchlist = [...watchlist, movieObject];
    setWatchlist(updatedWatchlist);
    console.log(updatedWatchlist);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  handleAddToWatchList={handleAddToWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />

          <Route
            path="/watchlist"
            element={
              <>
                <Watchlist watchList={watchlist} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
