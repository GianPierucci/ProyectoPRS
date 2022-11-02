import ProdCard from "./ProdCard";

const ItemList = ({items}) => {
    return(
        <div className="itemsContainer">
            {items.map((prod) => {
                    return <ProdCard prod={prod} key={prod.id} />
                })}
        </div>
    )
}

export default ItemList;