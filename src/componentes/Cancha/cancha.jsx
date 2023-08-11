import Barra from "../barra/barra"
import stilo from "../Cancha/cancha.module.css"

export default function Cancha (){
    return(
        <div className={stilo.contenedor}>
            <div className={stilo.contenedor_barra}>
                <Barra></Barra>
            </div>
            
            
        </div>
        
    )
}