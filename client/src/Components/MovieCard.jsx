import React from 'react'
import './Style.css'
const MovieCard = ({movie}) => {
  return (
      <>
          <div id="movieCard">
              <img src={movie.movieImg} alt="" />
              <h3>{movie.movieName}</h3>
              <h4>Rating:  {movie.rating}</h4>
          </div>
      </>
  )
}

export default MovieCard
