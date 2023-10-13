import React, { useEffect, useState, useContext } from "react";
import "./Style.css";
import axios from "axios";
import UserContext from "../Contexts/UserContext";

// Components
import Carousel from "../Components/Carousel";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const { city, setCity } = useContext(UserContext);
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/movies/${city}`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  return (
    <>
      <Carousel />  
      <div id="home">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/slug-navratri-collection-202309251241.jpg"
          id="homePoster"
          alt=""
        />
        <h1>Reccomended Movies</h1>
        <div id="movieList">
          {Movies.length > 0 ? (
            Movies.map((movie) => (
              <MovieCard movie={movie} key={movie._id} />
            ))
          ) : (
            <h2>Movies are not available in your city at this time.</h2>
          )}
        </div>
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          id="homePoster"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
