import axios from "axios";
import React, { useEffect } from "react";
import useFetch from "../utils/useFetch";

const Profile = () => {
  const {
    error,
    isPending,
    data: user,
  } = useFetch("http://localhost:3000/user/me");
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col h-screen m-auto text-3xl px-24">
      Profile
      <div className="container-lg">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {user && user.map((user) => <h1 key={user._id}>{user.email}</h1>)}
      </div>
    </div>
  );
};

export default Profile;
