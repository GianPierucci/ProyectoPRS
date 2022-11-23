import { addDoc, collection, orderBy, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react"
import { CartContext } from "../../context/CartContext";
import { database } from "../../services/firebaseConfig";


const Formulario = () => {
 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [gmail, setGmail] = useState("");
    const [ordenId, setOrdenId] = useState("")
    const [enviando, setEnviando] = useState(false)

    const {carrito, totalPrecio, borrarTodos} = useContext(CartContext)

    const handleSubmit = (e) =>{
        setEnviando(true)
        e.preventDefault();
        const orden = {
            comprador: {nombre, apellido, gmail},
            items: carrito,
            total: totalPrecio(),
            date: serverTimestamp(),
        }
        const ordenColeccion = collection(database, "ordenes")
        addDoc(ordenColeccion, orden)
        .then((res) =>{
            borrarTodos()
            setOrdenId(res.id)
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

    const handleCambiarGmail = (e) =>{
        setGmail(e.target.value);
    }
    

    if(ordenId){
        return(
            <div className="codigoCompra">
                <h1>Gracias por tu compra, tu numero de seguimiento es {ordenId}</h1>
            </div>
        )
    }

    return(
        <div className="formulario">
            <h1>Formulario de compra</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleCambiarNombre} value={nombre}/>
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleCambiarApellido} value={apellido}/>
                <input type="text" name="gmail" placeholder="Correo Electronico" onChange={handleCambiarGmail} value={gmail}/>
                <button>{enviando ? "Enviando..." : "Enviar"}</button>
            </form>
        </div>
    )
}

export default Formulario