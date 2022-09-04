import React from "react";
import "./Nav bar css file.css";
import Search from "../Search section folder/Search";
import NavLinks from "./nav links";

function Nav(prop) {
  return (
    <nav class="navbar" id="mynav">
      <div className="links-section">
        <div className="brand-name">Brand Name</div>
        <ul className="navigations">
          <NavLinks
            p={{
              Cname: "Home",
              href: "#",
              iCname: "fa-solid fa-house",
              span: "title",
            }}
          />
          <NavLinks
            p={{
              Cname: "Home",
              href: "#",
              iCname: "fa-solid fa-briefcase",
              span: "title",
            }}
          />
          <NavLinks
            p={{
              Cname: "Home",
              href: "#",
              iCname: "fa-solid fa-square-poll-horizontal",
              span: "title",
            }}
          />
          <NavLinks
            p={{
              Cname: "Home",
              href: "#",
              iCname: "fa-solid fa-address-card",
              span: "title",
            }}
          />
        </ul>
      </div>
      <div className="right-section-nav">
        <Search />
        <a href="#" className="log-in-button">
          Login
        </a>
      </div>
      <a herf="#" className="toggale">
        <i class="fas fa-bars"></i>
      </a>
    </nav>
  );
}

export default Nav;

// function ed() {
//   const toggleButton = document.getElementsByClassName("toggale")[0];
//   const navbar = document.getElementsByClassName("nav-item");

//   toggleButton.addEventListener("click", () => {
//     for (let i = 0; i < navbar.length; i += 1)
//       navbar[i].classList.toggle("active");
//   });
// }
