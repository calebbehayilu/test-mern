import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import axios from "axios";

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
        {blogs &&
          blogs.map((blog) => (
            <div class="card card-bordered m-2 w-56">
              <div class="card-body">
                <h2 class="card-title">{blog.name}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Welcome;
