import ProdCard from "./ProdCard";

const ItemList = (props) => {
    return(
        <div className="itemsContainer">
            {
                props.items.map((prod) => {
                    return <ProdCard prod={prod} />
                })
            }
        </div>
    )
}

export default ItemList;