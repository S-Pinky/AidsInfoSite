import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from './components/Header';
import { Doctors } from './pages/Doctors';
import { Home } from './pages/Home';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/doctors" element={<Doctors />} /> 
      </Routes>
    </Router>
  );
};

export default App;