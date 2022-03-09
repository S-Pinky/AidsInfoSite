import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Blog } from "./pages/Home/index"
import Header from "./components/Header";

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Blog />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
