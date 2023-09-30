import React, { useRef } from "react";
import useKey from "../CustomUseHooks/useKey";

function Search({ setQuery, query }) {
  const inputEl = useRef(null);

  function Focus() {
    if (document.activeElement === inputEl.current) return;

    inputEl.current.focus();
    setQuery("");
  }

  useKey("Enter", Focus);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;

/*  useEffect(() => {
    function callBack(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }

    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [setQuery]);*/
