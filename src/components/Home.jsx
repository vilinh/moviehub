import React from "react";
import Landing from "./landing/Landing";
import Watchlist from "./watchlist/Watchlist";
import Watched from "./watchlist/Watched";

export default function Home() {
  return (
    <div>
      <Landing />
      <Watchlist />
      <Watched />
    </div>
  );
}
