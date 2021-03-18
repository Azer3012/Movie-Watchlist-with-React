import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCArd({ movie }) {
  const { addMovieToWatchList, watchList } = useContext(GlobalContext);

  let storedMovie = watchList.find((o) => o.id === movie.id);

  let watchlistDisabled = storedMovie ? true : false;
  return (
    <div className="result-card">
      <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="info-header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date.substring(0, 4)}</h4>
        </div>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            className="btn btn-success"
            onClick={() => addMovieToWatchList(movie)}
          >
            Add to watchList
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCArd;
