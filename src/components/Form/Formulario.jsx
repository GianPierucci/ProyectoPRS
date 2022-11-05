import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react"
import { CartContext } from "../../context/CartContext";
import { database } from "../../services/firebaseConfig";


const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const {carrito, totalPrecio, borrarTodos} = useContext(CartContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({nombre, setNombre})
        const orden = {
            comprador: {nombre, apellido},
            items: carrito,
            total: totalPrecio(),
            date: serverTimestamp(),
        }
        const ordenColeccion = collection(database, "ordenes")
        addDoc(ordenColeccion, orden)
        .then((res) =>{
            borrarTodos()
        })
        .catch((error) =>{
            console.log(error);
        })
    }    

    


    const handleCambiarNombre = (e) =>{
        setNombre(e.target.value);
    }

    const handleCambiarApellido = (e) =>{
        setApellido(e.target.value);
    }

    return(
        <div className="formulario">
            <h1>Formulario de compra</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleCambiarNombre} value={nombre}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleCambiarApellido} value={apellido}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario