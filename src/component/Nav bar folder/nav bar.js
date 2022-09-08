import "./Nav bar css file.css";
import Search from "../Search section folder/Search";
import NavLinks from "./nav links";
import NavPageInfo from "./Nav bar links info";
import React, { useEffect, useRef } from "react";

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
  const navRef = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      const show = document.getElementById("navigation");
      if (show.style.display === "none") {
        show.style.display = "flex";
      } else {
        show.style.display = "none";
      }
    };

    const element = navRef.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="navbar" id="mynav">
      <div className="links-section">
        <div className="brand-name">Brand Name</div>
        <ul className="navigations" id="navigation" ref={navRef}>
          {mapping()}
        </ul>
      </div>
      <div className="right-section-nav">
        <Search />
        <a href="#" className="log-in-button">
          Login
        </a>
      </div>
      <button className="toggale" id="click" ref={navRef}>
        <a herf="#" className="toggale">
          <i className="fas fa-bars"></i>
        </a>
      </button>
    </nav>
  );
}

export default Nav;
