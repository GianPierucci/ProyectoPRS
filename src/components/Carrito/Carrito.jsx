import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";


const Carrito = (prod) => {

    const { carrito, borrarTodos, totalPrecio, totalUnidades, borrarUnidad } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="carritoVacio">
                <h1>Ningún producto agregado <FontAwesomeIcon icon={faCartPlus} /></h1>
            </div>
        )
    }

    return (
        <div className="divCarrito">
            {carrito.map((prod) => {
                return (
                    <div className="divDetalleCarrito" key={prod.id}>
                        <img src={prod.img} alt="" />
                        <div className="divInfoCarrito">
                            <h2>{prod.nombre}</h2>
                            <h2>{prod.tipo} {prod.color}</h2>
                            <p>Cantidad: ${prod.cantidad}</p>
                            <div className="divPreciosCarrito"><p>{prod.precio}</p><p>Subtotal: ${prod.precio * prod.cantidad}</p></div>
                        </div>
                        <button><FontAwesomeIcon className="iconoElim" onClick={() => borrarUnidad(prod.id)} icon={faTrash}/></button>
                    </div>
                )})}
            <div className="divCarritoTotal">
                <button onClick={borrarTodos}>Vaciar carrito</button>
                <div>
                    <h2>Cantidad: {totalUnidades()}</h2>
                    <h2>Precio Total: ${totalPrecio()}</h2>
                </div>
            </div>
        </div>
    )
}

export default Carrito;

