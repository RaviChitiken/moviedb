import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import "./styles.css";

const Featured_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2ab044975ca6564fa2018ad551f1d27a&page=3";

const Search_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=2ab044975ca6564fa2018ad551f1d27a&query=";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(Featured_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(Search_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {React.Children.toArray(
          movies.length > 0 &&
            movies.map((movie) => (
              <Movie key={movie.id} year={movie.release_date} {...movie} />
            ))
        )}
      </div>
    </>
  );
};

export default App;
