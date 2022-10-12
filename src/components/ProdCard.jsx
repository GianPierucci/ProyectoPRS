import blackoutimg from "../imgs/blackout.jpg"

const ProdCard = ({prod}) => {
    console.log(prod);
    return (
        <div className="prodCard">
            <img src={blackoutimg} alt="" className="blackoutImg"/>
            <div>
                <h2>{prod.nombre}</h2>
                <h4>{prod.tipo}</h4>
                <h4>{prod.color}</h4>
            </div>
        </div>
    )
}

export default ProdCard;