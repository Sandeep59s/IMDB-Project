import React, { useEffect, useState } from "react";

const bannerUrl = [
  {
    backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
    title: "Napoleon",
  },
  {
    backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
    title: "Justice League: Crisis on Infinite Earths Part One",
  },
  {
    backdrop_path: "/qgFrFXtiGfWN1zkk4sPd0nwFaBF.jpg",
    title: "Role Play",
  },
  {
    backdrop_path: "/uKP0B8HUJ08fas7NF77Xwu0bolJ.jpg",
    title: "One More Shot",
  },
  {
    backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
    title: "Society of the Snow",
  },
  {
    backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
    title: "The Beekeeper",
  },
  {
    backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    title: "Oppenheimer",
  },
  {
    backdrop_path: "/m3s0jyPGtluJ48kD0fUiPjXrRhr.jpg",
    title: "Mean Girls",
  },
  {
    backdrop_path: "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    title: "Barbie",
  },
  {
    backdrop_path: "/sQLMaESdeELB7Dl8HdxfGlZYRzu.jpg",
    title: "The Holdovers",
  },
];
function Banner() {
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    const idx = Math.floor(Math.random() * 10);
    setIndex(idx);
  }, []);

  return (
    <div
      className="h-[6vh] md:h-[72vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerUrl[Index].backdrop_path})`,
      }}
    >
      <div
        style={{ color: "#ff0000" }}
        className="text-white w-full text-center text-3xl"
      >
        {bannerUrl[Index].title}
      </div>
    </div>
  );
}

export default Banner;
