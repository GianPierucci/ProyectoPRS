import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "../imgs/prs.jpg";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <button className="botonAbrir" id="btnAbr"><FontAwesomeIcon className="faBars" icon={faBars}/></button>
            <ul className="ul menu-abierto">
                <button className="botonCerrar" id="btnCerr"><FontAwesomeIcon className="faXmark" icon={faXmark}/></button>
                <li className="lis">Inicio</li>
                <li className="lis">Catalogo</li>
                <li className="lis">Nosotros</li>
                <CartWidget />
            </ul>
        </div>
    )
}

export default NavBar;