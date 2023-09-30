import { useState, useEffect } from "react";

function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const sortwdValue = localStorage.getItem(key);
    return sortwdValue ? JSON.parse(sortwdValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorageState;
