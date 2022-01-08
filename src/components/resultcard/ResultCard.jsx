import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./resultcard.css";

export default function ResultCard({ movie }) {
  const { addMovietoWatchlist, addMovietoWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className=""
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <div className="sub-info">
            <h4 className="release-date">
              {movie.release_date ? movie.release_date.substring(0, 4) : ""}
            </h4>
            <div className="rating-group">
              <h5 className="rating">Rating: {movie.vote_average}</h5>
            </div>
          </div>
        </div>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className="btn"
            onClick={() => addMovietoWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            disabled={watchedDisabled}
            className="btn"
            onClick={() => addMovietoWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
