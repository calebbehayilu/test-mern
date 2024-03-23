import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";

const Welcome = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col h-screen m-auto text-3xl px-24">
      Welcome
      <div className="container-lg">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <h1>Data has been set</h1>}
      </div>
    </div>
  );
};

export default Welcome;
