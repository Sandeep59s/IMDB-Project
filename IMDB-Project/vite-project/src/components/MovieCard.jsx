import React from "react";

function MovieCard() {
  return (
    <div
      className="h-[50vh] w-[210px] bg-cover bg-center flex items-end rounded-xl hover:scale-110 duration-700"
      style={{
        backgroundImage:
          "url(https://img.buzzfeed.com/buzzfeed-static/complex/images/wjnhpz3osrai5aningjl/titanic.jpg?downsize=900:*&output-format=auto&output-quality=auto)",
      }}
    >
      <div className="text-white w-full text-xl text-center p-2 bg-gray-900/55 rounded-xl ">
        Titanic
      </div>
    </div>
  );
}

export default MovieCard;
