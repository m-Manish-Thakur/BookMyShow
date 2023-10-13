import React, { useState } from "react";
import "./Style.css";

const TheaterAndShowTimes = ({ theater }) => {
  const [theaterDeatil, setTheater] = useState(theater.theater);
  const [showTimes, setShowtimes] = useState(theater.showtimes);

  return (
    <>
      <div id="theaterAndShowtime">

        <div className="theaterName">
          {theaterDeatil.theaterName}
          <p>Total Capacity: {theaterDeatil.capacity} seats</p>
        </div>

        <div className="showTimes">
          {showTimes.map((item) => (
            <div>
              <h5>{item.time}</h5>
              <p>Rs. {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TheaterAndShowTimes;
