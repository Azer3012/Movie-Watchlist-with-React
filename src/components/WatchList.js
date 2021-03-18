import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function WatchList() {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="movie-header">
        <h1 className="heading">Mənim kino listim</h1>

        <button className="count">{watchList.length} Kino var listinizdə</button>
      </div>
      {watchList.length > 0 ? (
        <div className="movie-grid">
          {watchList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} type="watchList" />
          ))}
        </div>
      ) : (
        <h2 className="no-movie">Hələki kino listiniz boşdur kino əlavə edin</h2>
      )}
    </div>
  );
}

export default WatchList;
