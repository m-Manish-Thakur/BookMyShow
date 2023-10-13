import React, { useEffect, useState, useContext } from "react";
import "./Style.css";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { useParams, Link } from "react-router-dom";

const MovieDetail = () => {
  const { city, setCity } = useContext(UserContext);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/movies/movie/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <div id="movieDetails">
          <div id="moviePoster">
            <img src={movie[0].movieImg} alt="" />
            <div className="content">
              <h2>{movie[0].movieName}</h2>
              <span>
                <i class="fa-solid fa-star"></i> {movie[0].rating}/10{" "}
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "lightgray",
                    marginLeft: "5px",
                  }}
                >
                  Rating
                </span>
              </span>
              <div id="review">
                <div>
                  <h5>Add your rating & review</h5>
                  <p>Your rating matter</p>
                </div>
                <button>Rate now</button>
              </div>
              <br />
              <button
                style={{
                  border: "none",
                  padding: "4px 8px",
                  borderRadius: "5px",
                }}
              >
                2D
              </button>
              <button
                style={{
                  border: "none",
                  padding: "4px 8px",
                  borderRadius: "5px",
                  marginLeft: "10px",
                }}
              >
                {movie[0].language}
              </button>
              <p id="duration_date">{movie[0].duration} </p>
              <Link to={`/buytickets/${city}/movies/${movieId}`}>
                <button id="bookTickets">Book tickets</button>
              </Link>
            </div>
          </div>

          <div id="aboutMovie">
            <h5>About the movie</h5>
            <p>{movie[0].aboutMovie}</p>
            <div
              style={{
                height: "1px",
                width: "60vw",
                background: "gray",
                margin: "30px 0",
              }}
            ></div>
            <h5>Cast</h5>
            <div id="casts">
              {movie[0].casts.map((cast) => (
                <div className="item">
                  <img src={cast.img} alt="" />
                  <h6>{cast.castName}</h6>
                  <p className="as">as {cast.as}</p>
                </div>
              ))}
            </div>
            <br />
            <h5>Top reviews</h5>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default MovieDetail;
