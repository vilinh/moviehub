import React from "react";
import "./moviecard.css";
import MovieControls from "./MovieControls";


export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
}
