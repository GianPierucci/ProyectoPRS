import { useState } from "react";
import { Link } from "react-router-dom";

const ItemContador = ({inicial, stock, botonAgr}) => {
    
    const [contador, setContador] = useState(inicial);

    const sumar = () => {
        contador < stock && setContador(contador + 1);
    }
    
    const restar = () => {
        contador > inicial && setContador(contador - 1);
    }

    return(
        <div className="cajaContador">
            <button className="botonesContador" disabled={contador === stock} onClick={sumar}> + </button>        
            <p>{contador}</p>
            <button className="botonesContador" disabled={contador === inicial} onClick={restar}> - </button>
            <button className="botonAgregaralCarrito" onClick={() => botonAgr(contador)}>Agregar al carrito</button>
        </div>
        
    )
}

export default ItemContador;