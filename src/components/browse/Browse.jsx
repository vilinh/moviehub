import React, { useState, useEffect } from "react";
import MovieCard from "../moviecard/MovieCard";
import "./browse.css";

export default function Browse() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    searchPopular();
    searchTopRated();
  }, []);

  const searchPopular = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setPopular(data.results.slice(0, 10));
        } else {
          console.log(console.error());
        }
      });
  };

  const searchTopRated = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTopRated(data.results.slice(0, 10));
        } else {
          console.log(console.error());
        }
      });
  };

  return (
    <div className="browse">
      <div className="container">
        <div className="category">
          <div className="header">
            <h1 className="heading">Popular Movies</h1>
          </div>
          <div className="movie-grid">
            {popular.map((movie) => (
              <MovieCard movie={movie} type={"browse"} />
            ))}
          </div>
        </div>
        <div className="category">
          <div className="header">
            <h1 className="heading">Top Rated Movies</h1>
          </div>
          <div className="movie-grid">
            {topRated.map((movie) => (
              <MovieCard movie={movie} type={"browse"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
