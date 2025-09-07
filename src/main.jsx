import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import './index.css'
import App from './App.jsx'
import Home from "./Components/Home";
import Forget from "./Components/Forget";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Forget" element={<Forget />} />
    </Routes>
  </BrowserRouter>
);

