import "../scss/App.scss";
import logo from "../imgs/prs.jpg";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="ul">
                <li className="lis">Inicio</li>
                <li className="lis">Catalogo</li>
                <li className="lis">Nosotros</li>
                <CartWidget />
            </ul>

        </div>
    )
}

export default NavBar;