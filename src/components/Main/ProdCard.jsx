import blackoutimg from "../../assets/blackout.jpg";
import { Link, NavLink } from "react-router-dom"

const ProdCard = ({ prod }) => {
    return (
        <div className="prodCard">
            <img src={prod.img} alt="" className="blackoutImg" />
            <h2>{prod.nombre} {prod.tipo}</h2>
            <div className="infoProducto">
                <div>
                    <h4>{prod.color}</h4>
                    <h4>${prod.precio}</h4>
                </div>
                <div className="botonVerMas">
                    <NavLink to={`/Producto/${prod.id}`}><button type="button">Ver más</button></NavLink>
                </div>
            </div>

        </div>
    )
}

export default ProdCard;