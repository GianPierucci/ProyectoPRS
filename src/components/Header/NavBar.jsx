import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/prs.jpg";
import CartWidget from "./CartWidget";
import { Link, NavLink} from "react-router-dom";
import { useState } from "react";

 
const NavBar = () => {

    const [navR , setNavR] = useState(true) 
    
    const abrirMenu = () => {
        setNavR(!navR)
    }
    
    return ( 
        <div className="navbar">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link> 
            <button onClick={abrirMenu} className="botonAbrir"><FontAwesomeIcon className="faBars" icon={faBars}/></button>
            <ul className={`ul ${navR ? "menu-abierto" : ""}`}>
                <button onClick={abrirMenu} className="botonCerrar"><FontAwesomeIcon className="faXmark" icon={faXmark}/></button>
                <NavLink to="/" className="lis">INICIO</NavLink>
                <NavLink to="/Catalogo"  className="lis">CATALOGO</NavLink>
                <NavLink to=""  className="lis">NOSOTROS</NavLink>
                <NavLink to="/Carrito"><CartWidget /></NavLink>
            </ul>
        </div>
    )
    
    
}



export default NavBar;

