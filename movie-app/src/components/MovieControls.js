import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  let eye = {
    color: "green",
    marginRight: "5px",
    cursor: "pointer",
  };
  let times = {
    color: "white",
    cursor: "pointer",
  };

  const {
    removeFromToWatchList,
    addMovieToWatched,
    moveToWatchList,
    removeFromToWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye" style={eye}></i>
          </button>

          <button
            className="btn"
            onClick={() => removeFromToWatchList(movie.id)}
          >
            <i className="fas fa-times" style={times}></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button className="btn" onClick={() => moveToWatchList(movie)}>
            <i className="fa-fw far fa-eye-slash" style={eye}></i>
          </button>

          <button className="btn" onClick={() => removeFromToWatched(movie.id)}>
            <i className="fas fa-times" style={times}></i>
          </button>
        </>
      )}
    </div>
  );
}

export default MovieControls;
