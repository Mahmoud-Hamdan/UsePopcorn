import React, { useState } from "react";
import Navbar from "./NavBar/NavBar";
import Main from "./Main/Main";
import NumResult from "./NavBar/NumResult";
import Search from "./NavBar/Search";
import Box from "./Main/Box";
import MovieList from "./Main/ListBox/MovieList";
import WtachedSummary from "./Main/wtachedList/WatchedSummary";
import WatchedMovieList from "./Main/wtachedList/WatchedMovieList";
import Loader from "./Main/ListBox/Loader";
import ErrorMessage from "./Main/ListBox/ErrorMessage";
import MovieDetails from "./Main/MovieDetails/MovieDetails";
import useMovies from "./CustomUseHooks/useMovies";
//import useLocalStorageState from "./CustomUseHooks/useLocalStorageState";
import useFunctions from "./CustomUseHooks/useFunctions";

const KEY = "5c1f3186";

function App() {
  const [query, setQuery] = useState("");
  const {
    handelSelectMovie,
    watched,
    selectedId,
    handelCloseMovie,
    handleAddWatched,
    handelDeleteWatched,
  } = useFunctions();
  const { movies, isLoading, error } = useMovies(query, handelCloseMovie);
  return (
    <>
      <Navbar>
        <Search setQuery={setQuery} query={query} />
        <NumResult movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {/*isLoading ? <Loader /> : <MovieList movies={movies} />*/}
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handelSelectMovie} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handelCloseMovie}
              KEY={KEY}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WtachedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handelDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;

//https://www.omdbapi.com/
