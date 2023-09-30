import React from "react";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WtachedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>
            {
              //Math.round(avgImdbRating * 100) / 100
              avgImdbRating.toFixed(2)
            }
          </span>
        </p>
        <p>
          <span>🌟</span>
          <span>
            {
              //Math.round(avgUserRating * 100) / 100
              avgUserRating.toFixed(2)
            }
          </span>
        </p>
        <p>
          <span>⏳</span>
          <span>
            {
              //Math.round(avgRuntime * 100) / 100
              avgRuntime.toFixed(2)
            }
            min
          </span>
        </p>
      </div>
    </div>
  );
}

export default WtachedSummary;
