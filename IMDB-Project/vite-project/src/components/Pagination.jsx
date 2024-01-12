import React from "react";

function Pagination( {nextPageFn, prevPageFn, pageNumber }) {
  return (
    <div
      style={{ backgroundColor: "#ff0000" }}
      className=" h-[50px] mt-8 mr-[20%] ml-[20%] flex justify-center p-3"
    >
      <div
        onClick={prevPageFn}
        className="px-10 hover:scale-150 duration-300 text-2xl"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="text-xl px-5">{pageNumber}</div>
      <div
        onClick={nextPageFn}
        className="px-10 hover:scale-150 duration-300 text-2xl"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
