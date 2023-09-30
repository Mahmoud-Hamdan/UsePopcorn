import { useState } from "react";
import useLocalStorageState from "./useLocalStorageState";

function useFunctions() {
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handelSelectMovie(id) {
    setSelectedId((selectedId) => {
      return id === selectedId ? null : id;
    });
  }

  function handelCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handelDeleteWatched(id) {
    setWatched((watched) => {
      return watched.filter((movie) => {
        return movie.imdbID !== id;
      });
    });
  }

  return {
    handelSelectMovie,
    handelCloseMovie,
    handleAddWatched,
    handelDeleteWatched,
    selectedId,
    watched,
  };
}

export default useFunctions;
