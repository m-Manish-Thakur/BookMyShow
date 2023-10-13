import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./Contexts/UserContext";

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MovieDetail from "./Pages/MovieDetail";
import BookTickets from "./Pages/BookTickets";

const App = () => {
  const { city } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/${city}/movies/:movieId`} element={<MovieDetail />} />
        <Route
          path={`/buytickets/${city}/movies/:movieId`}
          element={<BookTickets />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
