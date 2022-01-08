import React, { useContext } from "react";
import "./moviecard.css";
import { GlobalContext } from "../../context/GlobalState";

export default function MovieControls({ movie, type }) {
  const {
    removeMovieFromWatchlist,
    addMovietoWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button onClick={() => addMovietoWatched(movie)} className="ctrl-btn">
            <i className="fas fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          {/* <button className="ctrl-btn">
            <i className="fas fa-comment"></i>
          </button> */}
          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "browse" && (
        <>
          <button onClick={() => addMovietoWatched(movie)} className="browse ctrl-btn">
            <i className="fas fa-eye"></i>
          </button>
        </>
      )}
    </div>
  );
}
