import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import App from "./App";

const Navbar = ({ onSearch }) => {
  let [title, setTitle] = useState("");

  let handleSearch = (e) => {
    if (e.key === "Enter" && title.trim()) {
      onSearch(title); // Trigger search passed from parent component
      setTitle(""); // Clear search input after submission
    }
  };

  return (
    <div>
      <nav>
        <div className="leftnav">
          <h1>Movies</h1>
        </div>
        <div className="rightnav">
          <ul>
            <li>
              <NavLink to={"/"}>Popular Movies</NavLink>
            </li>
            <li>
              <NavLink to={"top-rated"}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink to={"upcoming"}>Upcoming Movies</NavLink>
            </li>
            <li>
              <input
                type="text"
                name="title "
                id="title"
                placeholder="Search Movie"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                onKeyDown={handleSearch}
                value={title}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
