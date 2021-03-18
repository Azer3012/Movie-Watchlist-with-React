import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider compnent

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  //actions

  const addMovieToWatchList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeFromToWatchList = (id) => {
    dispatch({ type: "REMOVE_FROM_TO_WATCHLIST", payload: id });
  };

  const moveToWatchList = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromToWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_TO_WATCHED", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        addMovieToWatchList,
        removeFromToWatchList,
        addMovieToWatched,
        moveToWatchList,
        removeFromToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
