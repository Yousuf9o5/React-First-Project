import React from "react";
import "./Search and Login button css file.css";

function Search() {
  return (
    <div>
      <div className="search-bar-seaction">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search here"></input>
      </div>
    </div>
  );
}

export default Search;
