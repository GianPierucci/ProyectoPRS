import { collection, getDocs } from "firebase/firestore";
import { database } from "../../services/firebaseConfig"
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const coleccionProds = collection(database, "Productos")

    getDocs(coleccionProds)
      .then((res) => {
        const productos = res.docs.map((prod) => {
          return{
            id: prod.id,
            ...prod.data()
          }
        })
        setItems(productos)
        console.log(productos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setCargando(false);
      })

  }, []);



  return (
    <main>
      {cargando ?
        <div className="spinner"></div>
        : <div className="listContainer">
          <ItemList key={items.id} items={items} />
        </div>
      }

    </main>

  )
}

export default ItemListContainer;



/*  const traerProductos = () => {
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
     }) */