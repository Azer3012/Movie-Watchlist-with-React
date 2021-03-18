import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

function Watched({ movie, type }) {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className="movie-page">
        <div className="movie-header">
          <h1 className="heading">Baxdığınız kinolar</h1>
          <button className="count"> Baxdıqlarınızın sayı {watched.length}</button>
        </div>
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movie">Baxdığının kino yoxdur</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
