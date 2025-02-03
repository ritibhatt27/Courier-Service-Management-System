import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import TrackOrder from "./components/TrackOrder";
import ShipOrder from "./components/ShipOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/track" element={<TrackOrder />} />
        <Route path="/ship" element={<ShipOrder />} />
      </Routes>
    </Router>
  );
}

export default App;