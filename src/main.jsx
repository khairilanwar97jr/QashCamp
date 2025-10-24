import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Booking from "./pages/Booking";
import AddOn from "./pages/AddOn";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/AddOn" element={<AddOn />} />
    </Routes>
  </BrowserRouter>
);
