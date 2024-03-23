import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import { jwtDecode } from "jwt-decode";
import Logout from "./pages/logout";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      setToken(user);
    }
  }, []);
  return (
    <>
      <Navbar user={token} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Welcome />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
