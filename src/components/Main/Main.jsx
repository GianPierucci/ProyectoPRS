import SeccTipos from "./SeccTipos"
import SeccPrinc from "./SeccPrinc"
import SeccInfoEmpresa from "./SeccInfoEmprea"
import SeccInfoAyuda from "../componentes/SeccInfoAyuda"

const  Main = () =>{
    return (
        <div> 
            <SeccPrinc />
            <SeccTipos />
            <SeccInfoEmpresa />
            <SeccInfoAyuda />
        </div>
    )
}

export default Main