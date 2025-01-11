import React from "react";
import Login from "../src/components/CustomComponents/Login/Login.jsx";
import Sign from "../src/components/CustomComponents/Signup/Signup.jsx";
import { Router, Route, BrowserRouter, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
