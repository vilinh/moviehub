import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <i className="fa-solid fa-clapperboard"></i> MovieHub
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="button">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
