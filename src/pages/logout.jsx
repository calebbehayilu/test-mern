import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const history = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    window.location = "/login";
  }, []);
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <span className="loading loading-spinner loading-xs"></span>
      <h1>Logging Out</h1>
    </div>
  );
};

export default Logout;
