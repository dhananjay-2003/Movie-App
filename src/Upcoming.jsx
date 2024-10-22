import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  let [movies, setMovies] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  // let apiKey = "c45a857c193f6302f2b5061c3b85e743";
  let navigate = useNavigate();

  let fetchMovies = async (page = 1) => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}

  `;
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      console.log(movies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  let handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="mii">
      <h1>Popular Movies</h1>
      <div className="main-container">
        {movies.map((movie) => (
          <div
            className="container"
            key={movie.id}
            onClick={() => {
              navigate(`/detail/${movie.id}`);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average}</p>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="buttons">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Upcoming;
