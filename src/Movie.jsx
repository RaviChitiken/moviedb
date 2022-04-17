import React from "react";

const Image_API = "https://image.tmdb.org/t/p/original";

const setVoteClass = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, year, vote_average }) => (
  <>
    <div className="movie">
      <img
        src={
          poster_path
            ? Image_API + poster_path
            : "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        }
        className="img-custom"
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>

        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>

      <div className="movie-over">
        <p className="year">Year {year.slice(0, 4)}</p>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  </>
);

export default Movie;
