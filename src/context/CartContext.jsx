import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const Provider = ({children}) => {
    
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item, cantidad) => {
        const producto = {...item, cantidad};
        if(!(prodRepetido(producto.id))) {
            setCarrito([...carrito, producto])
            toast.success("Se agregó al carrito!")
        } 
    }    
 
    const borrarUnidad = (id) => {
        const prodFiltrado = carrito.filter((prod) => prod.id !== id);
        setCarrito(prodFiltrado);
        toast.error("Eliminaste el producto")
    };

    const borrarTodos = () => {
        setCarrito([])
        toast.error("Eliminaste los productos")
    }

    const prodRepetido = (id) => carrito.some((prod) => prod.id === id)

    const totalUnidades = () => {
        let acumulador = 0
        const copia = [...carrito]
        copia.forEach((prod) =>{
            acumulador += prod.cantidad})
        return acumulador
    }

    const totalPrecio = () => {
        let acumulador = 0
        const copia = [...carrito]
        copia.forEach((prod) =>{
            acumulador += (prod.Precio * prod.cantidad)})
        return acumulador
    }
 
    return(
        <CartContext.Provider value={{ carrito, totalUnidades, totalPrecio, borrarTodos, agregarAlCarrito, borrarUnidad }}>
            {children}
        </CartContext.Provider>
    )

}

export default Provider;