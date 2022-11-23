import { NavLink } from "react-router-dom"

const ProdCard = ({ prod }) => {
    return (
        <div className="prodCard">
            <img src={prod.Imagen} alt="" className="blackoutImg" />
            <h2>{prod.Nombre} {prod.Tipo}</h2>
            <div className="infoProducto">
                <div>
                    <h4>{prod.Color}</h4>
                    <h4>${prod.Precio}</h4>
                </div>
                <div className="botonVerMas">
                    <NavLink to={`/Producto/${prod.id}`}><button type="button">Ver más</button></NavLink>
                </div>
            </div> 

        </div>
    )
}

export default ProdCard;