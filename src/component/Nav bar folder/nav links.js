import "./Nav bar css file.css";

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
