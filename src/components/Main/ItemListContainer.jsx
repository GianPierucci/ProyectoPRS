
import { useEffect, useState } from "react";
import productos from "../Catalogo.json"
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(productos);
        }, 2000);
      })
    }
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setCargando(false)
      })
  }, []);



  return (
    <main>
      { cargando ?
        <div className="spinner"></div>
        : <div className="listContainer">
          <ItemList key={items.id} items={items} />
        </div>
      }

    </main>

  )
}

export default ItemListContainer;