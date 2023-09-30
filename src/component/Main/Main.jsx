import React from "react";

//const average = (arr) =>
//arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function Main({ children }) {
  return <main className="main">{children}</main>;
}

export default Main;
