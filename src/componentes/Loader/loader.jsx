
import stilo from "../Loader/loader.module.css"
import logo from "../barra/escudo.jpg"

export default function Loader (){
    return(
        <div className={stilo.contenedor}>
            <div className={stilo.triangulo}></div>
            <img src={logo} alt="" className={stilo.img} />
        </div>
        
    )
}