import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../imgs/prs.jpg";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";



const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <button className="botonAbrir" id="btnAbr"><FontAwesomeIcon className="faBars" icon={faBars}/></button>
            <ul className="ul menu-abierto">
                <button className="botonCerrar" id="btnCerr"><FontAwesomeIcon className="faXmark" icon={faXmark}/></button>
                <NavLink to="/" className="lis">Inicio</NavLink>
                <NavLink to="/Catalogo"  className="lis">Catalogo</NavLink>
                <NavLink to=""  className="lis">Nosotros</NavLink>
                <CartWidget />
            </ul>
        </div>
    )
}

export default NavBar;