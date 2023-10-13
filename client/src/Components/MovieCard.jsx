import React, {useContext} from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

const MovieCard = ({ movie }) => {
  const { city, setCity } = useContext(UserContext);

  return (
    <>
      <div id="movieCard">
        <Link to={`${city}/movies/${movie._id}`}>
          <img src={movie.movieImg} alt="" />
        </Link>
        <h3>{movie.movieName}</h3>
        <h4>Rating: {movie.rating}</h4>
      </div>
    </>
  );
};

export default MovieCard;
