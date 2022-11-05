import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/translucida.jpg"; 
import { CartContext } from "../../context/CartContext";
import ItemContador from "./ItemContador";
import {toast } from 'react-toastify';


const ItemDetail = ({ item }) => {

    const {agregarAlCarrito} = useContext(CartContext)
    
    const botonAgr = (cantidad) => {
        agregarAlCarrito(item, cantidad)
    }

    return ( // SOLUCIONAR IMAGEN
        <div className="detailContainer">
            <img src={img} alt=""/>
           
            <div className="cajaInfoDetalle">
                <div>
                    <h2>{item.Nombre} {item.Tipo}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum veritatis ipsam incidunt non in velit consectetur voluptatibus corrupti doloremque, facilis molestias culpa quo, dolorem minus, magni repudiandae soluta labore vel!
                    Aliquam nisi vitae ea iste, beatae voluptate unde odio sunt? Dolores in fugit similique, mollitia iste dolore ut? Dicta, natus. A natus beatae cumque error suscipit repellendus voluptates, nesciunt iusto.</p>
                    <ItemContador botonAgr={botonAgr} stock={item.Stock} inicial={1} />
                </div>
                <div className="precioDetalle">
                    <h3>${item.Precio}</h3>
                    
                </div>
               
            </div>
        </div>
    )
}

export default ItemDetail;