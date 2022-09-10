import "./Navbar css file.css";
import Search from "../Search section folder/Search";
import NavLinks from "./Nav links";
import NavPageInfo from "./Navbar links info";
import React, { useEffect, useState } from "react";

function mapping() {
  const mapp = NavPageInfo().map((x) => (
    <NavLinks
      key={x.id}
      Cname={x.Cname}
      href={x.href}
      iClassname={x.iClassname}
      span={x.span}
    />
  ));

  return mapp;
}
function Nav(prop) {
  const { click, setClick } = useState(true);

  useEffect(() => {
    document.querySelector("button").onclick = () => {
      /* working on it */
      // const links = document.getElementById("navigation");
      // click ? (links.style.display = "none") : (links.style.display = "block");
    };
  });

  return (
    <nav className="navbar" id="mynav">
      <div className="links-section">
        <div className="brand-name">Brand Name</div>
        <ul className="navigations" id="navigation">
          {mapping()}
        </ul>
      </div>
      <div className="right-section-nav">
        <Search />
        <a href="#" className="log-in-button">
          Login
        </a>
      </div>
      <button
        className="toggale"
        id="click"
        onClick={
          click
            ? () => {
                return setClick(false);
              }
            : () => {
                return setClick(true);
              }
        }
      >
        <a herf="#" className="toggale">
          <i className="fas fa-bars"></i>
        </a>
      </button>
    </nav>
  );
}

export default Nav;
