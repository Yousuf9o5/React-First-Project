import './App.css'

function NavLinks(prop){
    return (<li className={prop.p.Cname}>
        <a href={prop.p.href}>
            <i className={prop.p.iCname}></i>
            <span>&nbsp;{prop.p.span}</span>
        </a> 
         
    </li>);
}

export default NavLinks;