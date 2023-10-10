import React, { useContext, useState, useEffect } from "react";
import "./Style.css";
import axios from "axios";
import Category from "./Category";
import UserContext from "../Contexts/UserContext";

const Navbar = () => {
  const { city, setCity } = useContext(UserContext);
  const [cities, setcities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/city")
      .then((response) => {
        setcities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCity = (cityName) =>{
    localStorage.setItem("city", cityName);
    setCity(cityName);
  }
  


  return (
    <>
      <header>
        <div className="d-flex align-items-center">
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
          <input
            type="search"
            id="search"
            placeholder="Search for Movies, Events, Sports..."
          />
        </div>
        <div className="d-flex align-items-center">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {city} <i class="fa-solid fa-caret-down"></i>
          </a>
          <button>Sign in</button>
          <i class="fa-solid fa-bars"></i>
        </div>
      </header>
      <Category />

      {/* --------------------   Model   ----------------- */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Select City
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="model">
              {cities.map((item) => (
                <div
                  id="city"
                  onClick={() => handleCity(item.cityName)}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={item.cityImg} style={{ width: "70px" }} />
                  <h4>{item.cityName}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
