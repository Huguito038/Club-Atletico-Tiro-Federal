import Barra from "../barra/barra"
import stilo from "../Actividades/actividades.module.css"
import Pie from "../pie/pie"
import { Link } from "react-router-dom"
import patin from "../Actividades/Patin/foto.jpeg"
import taekwondo from "../Actividades/Teakwondo/foto.jpg"
import telas from "../Actividades/Acrotelas/foto.jpg"
import pilates from "../Actividades/Pilates/foto.jpg"

export default function Actividades (){
    
    return (
            <div>
                <div>
                    <Barra></Barra>
                    <div className={stilo.titulos}>      
                        <h2>ACTIVIDADES</h2>
                        <h3>¡Veni a Tiro y disfruta en familia!</h3> 
                     </div> 
                </div>
                <div className={stilo.actividades}>
                   
                    <Link to="/actividades/teakwondo">
                        <div className={stilo.cont_deporte}>
                            <img className={stilo.img_fondo} src={taekwondo} alt="" />
                            <div className={stilo.barra_deporte}>
                                <h2>TEAKWONDO</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/actividades/acrotelas">
                        <div className={stilo.cont_deporte}>
                            <img className={stilo.img_fondo} src={telas} alt="" />
                            <div className={stilo.barra_deporte}>
                                <h2>ACROTELAS</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/actividades/pilates">
                        <div className={stilo.cont_deporte}>
                            <img className={stilo.img_fondo} src={pilates} alt="" />
                            <div className={stilo.barra_deporte}>
                                <h2>PILATES</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/actividades/patin">
                        <div className={stilo.cont_deporte}>
                            <img className={stilo.img_fondo} src={patin} alt="" />
                            <div className={stilo.barra_deporte}>
                                <h2>PATIN</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <Pie></Pie>
            </div>     
    )
}