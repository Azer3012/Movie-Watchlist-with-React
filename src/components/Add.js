import React, { useState } from "react";
import ResultCArd from "./ResultCArd";

function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    let api_key = "719d2a88bc1c7bf857992d6f41822363";
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="search-input">
        <input
          className="form-control"
          type="text"
          placeholder="Kino Axtar"
          value={query}
          onChange={handleOnChange}
        />
      </div>
      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCArd movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Add;
