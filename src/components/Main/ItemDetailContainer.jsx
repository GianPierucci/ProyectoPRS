import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../Catalogo.json"
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [cargando, setCargando] = useState(true)

  const { idProd } = useParams();
  
  useEffect(() => {

    const traerProductos = () => {
      return new Promise((res, rej) => {
        const producto = productos.find((prod) => prod.id === Number(idProd))
        setTimeout(() => {
          res(producto);                
        }, 1500);
      })
    }
    traerProductos()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [idProd]);


  return (
    <main>
      { cargando ?
        <div className="spinner"></div>
        : <div>
          <ItemDetail key={item.id} item={item}/>
        </div>
      }
      
    </main>
    
  )
}

export default ItemDetailContainer;