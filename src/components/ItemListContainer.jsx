
import { useEffect, useState } from "react";
import productos from "./Catalogo.json" 
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  
  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        setTimeout(() => {
          res(productos);
        }, 1000);
      })
    }
      traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  

    return(
       <div className="listContainer">
         <ItemList items={items}/>
       </div>
    )
}

export default ItemListContainer;