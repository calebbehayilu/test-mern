import { useState } from "react";
import Signup from "./components/signup";
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
