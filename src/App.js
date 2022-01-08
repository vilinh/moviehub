import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Watchlist from "./components/watchlist/Watchlist";
import Add from "./components/add/Add";
import Watched from "./components/watchlist/Watched";

import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
