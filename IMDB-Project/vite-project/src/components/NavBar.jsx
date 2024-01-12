import React from "react";
import Logo from "../imdb-project-logo.png";
import {Link} from "react-router-dom"; 

function NavBar() {
  return (
    <div className="flex space-x-12 items-center pl-4 py-3 ">
      <Link to="/"> <img src={Logo} className="w-[50px]" /></Link>

      <Link to="/" className="text-blue-500 text-2xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-bold">
        Watchlist
      </Link>
    </div>
  );
}

export default NavBar;
