import "./Navbar css file.css";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div>
      <link to="/">Home</link>

      <link to="/src/component/Other Pages/Contacts.js">Contacts</link>
      <link to="/src/component/Other Pages/About.js">About</link>
    </div>
  );
}

function NavLinks(prop) {
  return (
    <li className={prop.Cname}>
      <a href={prop.href}>
        <i className={prop.iClassname}></i>
        <span>&nbsp;{prop.span}</span>
      </a>
    </li>
  );
}

export default NavLinks;
