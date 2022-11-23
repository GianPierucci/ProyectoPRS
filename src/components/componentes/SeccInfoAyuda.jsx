import imagen from "../../assets/cortina1.png"
import imagen2 from "../../assets/cortina2.png"


const SeccInfoAyuda = () => {

    return (
        <section className="divCadenas">
            <h1>OPCIONES DE POSICION DE CADENAS</h1>
            <div className="divLadosCads">
                <div className="lados">
                    <p>Lado Izquierdo</p>
                    <img src={imagen} alt="cadena-lado-izquierdo" />
                </div>
                <div className="lados">
                    <p>Lado Derecho</p>
                    <img src={imagen2} alt="cadena-lado-derecho" />
                </div>
            </div>
        </section>
    )

}

export default SeccInfoAyuda;