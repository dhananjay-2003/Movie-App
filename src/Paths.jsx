import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Details from "./Details";
import Navbar from "./Navbar";
import Toprated from "./Toprated";
import Upcoming from "./Upcoming";

const Paths = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:movieId" element={<Details />} />
        <Route path="top-rated" element={<Toprated />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  );
};

export default Paths;
