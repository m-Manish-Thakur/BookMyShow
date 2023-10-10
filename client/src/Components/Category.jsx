import React from 'react'
import './Style.css'

const Category = () => {
  return (
    <div id='category'>
        <div className="d-flex align-items-center">
            <a href="#">Movies</a>
            <a href="#">Stream</a>
            <a href="#">Events</a>
            <a href="#"><img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" /></a>
        </div>
        <div className="d-flex align-items-center">
            <a href="#">ListYourShow</a>
            <a href="#">Offers</a>
            <a href="#">Gift Cards</a>
        </div>
    </div>
  )
}

export default Category
