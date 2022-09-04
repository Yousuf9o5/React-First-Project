import React from "react";
import "./Search css file.css";

function Search() {
  return (
    <div>
      <div className="search-bar-seaction">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search here"></input>
      </div>
    </div>
  );
}

export default Search;
