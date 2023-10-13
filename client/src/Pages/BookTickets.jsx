import React, { useEffect, useState, useContext } from "react";
import "./Style.css";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { useParams } from "react-router-dom";

const BookTickets = () => {
  const { city, setCity } = useContext(UserContext);
  const { movieId } = useParams();
  const [theaters, setTheaters] = useState([]);
  const [movie, setMovie] = useState();


  useEffect(() => {
    axios
      .get(`http://localhost:8000/theater/movie/${movieId}`)
      .then((response) => {
        console.log(response.data.theaterDetails);
        setMovie(response.data.movie)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);



  return (
    <>
    <div id='bookTickets'>
          <h3 className="movieName">{movie ? `${movie.movieName} - ${movie.language}` : ''}</h3>
    </div>
    </>
  );
};

export default BookTickets;
