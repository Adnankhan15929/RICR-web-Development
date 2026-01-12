import React from "react";
import Header from "./components/Header";
import Register from "../src/pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";



const App = () => {
  return (
    <>
      
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
