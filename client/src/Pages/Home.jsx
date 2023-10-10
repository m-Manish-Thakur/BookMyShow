import React, { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
// Components
import Carousel from "../Components/Carousel";
import MovieCard from "../Components/MovieCard";


const Home = () => {

  const [Movies, setMovies] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/movies")
    .then((response) => {
      setMovies(response.data);
      console.log(Movies);  
    }) 
    .catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <>
      <Carousel />
      <div id="home">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/slug-navratri-collection-202309251241.jpg"
          id="homePoster"
        />
        <h1>Reccomended Movies</h1>
        <div id="movieList">
        {
          Movies.map((movie)=>(
              <MovieCard movie={movie} key={movie._id}/>
          ))
        }
        </div>
        <img
          src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png'
          id="homePoster"
        />
       
      </div>
    </>
  );
};

export default Home;
