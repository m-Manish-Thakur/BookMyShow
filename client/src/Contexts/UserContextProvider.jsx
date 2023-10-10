import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

  const [city, setCity] = useState(localStorage.getItem('city') || 'Select City');

  return (
    <UserContext.Provider value={{ city, setCity }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
