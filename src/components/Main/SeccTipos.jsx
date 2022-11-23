import { faEyeLowVision, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import blackoutimg from "../../assets/blackout.jpg"
import sunscreenimg from "../../assets/sunscreen2.jpg"

const SeccionTipos = () => {
    return (
        <section className="cajaPrincTipos">
            <h1>CORTINAS ROLLERS</h1>
            <div className="fondoTipos">
                <div className="tiposRollers">
                    <div className="tipoRollerCaja">
                        <img src={sunscreenimg} alt="" />
                        <div className="textoTipos">
                            <Link to="/Catalogo/Sunscreen"><h2>Sunscreen</h2></Link>
                            <h3>Distintos grados de apertura <FontAwesomeIcon icon={faSun} /></h3>
                        </div>
                    </div>
                    <div className="tipoRollerCaja">
                        <img src={blackoutimg} alt="" />
                        <div className="textoTipos">
                            <Link to="/Catalogo/Blackout"><h2>Blackout</h2></Link> 
                            <h3>Oscurecimineto total <FontAwesomeIcon icon={faEyeLowVision} /></h3>
                        </div>
                    </div> 
                </div>
            </div>
            
        </section>
    )

}

export default SeccionTipos;