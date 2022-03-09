import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Doctors } from "./pages/Doctors";
import { Home } from "./pages/Home";

const App = () => {
  const [selectCity, setSelectCity] = useState("");
  const [selectSpecialty, setSelectSpecialty] = useState("");
  const [checkCrm, setCheckCrm] = useState("");

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSelectCity={setSelectCity}
              setSelectSpecialty={setSelectSpecialty}
              setCheckCrm={setCheckCrm}
              selectCity={selectCity}
              selectSpecialty={selectSpecialty}
            />
          }
        />
        <Route
          path="/doctors"
          element={
            <Doctors
              selectCity={selectCity}
              selectSpecialty={selectSpecialty}
              checkCrm={checkCrm}
              setCheckCrm={setCheckCrm}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
