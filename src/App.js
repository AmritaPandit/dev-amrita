import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarCom from "./Components/Header";
import Cards from "./Components/Cards";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <>
      <Router>
      <NavbarCom />
        <Routes>
          <Route path="/" element={<Cards />} exact />
          <Route path="/cart/:id" element={<CardDetails />} exact /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
