import { NavLink } from "react-router-dom"
import blackoutimg from "../../assets/blackout.jpg"
import sunscreenimg from "../../assets/sunscreen2.jpg"

export const TiposRoller = () => {
    return(
        <div className="tiposRollers">
            <div className="tipoRollerCaja">
                <img src={sunscreenimg} alt="" />
                <div className="textoTipos">
                    <NavLink to="/category/"><h2>Sunscreen</h2></NavLink>
                    <h3>Distintos grados de apertura</h3>
                </div>
            </div>
            <div className="tipoRollerCaja">
                <img src={blackoutimg} alt="" />
                <div className="textoTipos">
                    <h2>Blackout</h2>
                    <h3>Oscurecimineto total</h3>
                </div>
            </div>
        </div>
    )
}