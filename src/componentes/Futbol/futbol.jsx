import Barra from "../barra/barra"
import stilo from "../Futbol/futbol.module.css"
import logo from "../barra/escudo.jpg"
import escudo_visita from "../Futbol/escudo_visitante.png"
import escudo_visita_inf from "../Futbol/escudo_visitante_inf.png"
import {FaMapMarkerAlt,FaRegCalendarAlt,FaRegClock} from "react-icons/fa"
import Primera from "./Primera Division/primera"
import Reserva from "./Reserva/reserva"
import Primera_Fem from "./Primera Division Fem/primera"
import Reserva_Fem from "./Reserva Fem/reserva"
import { useState } from "react"


export default  function Futbol(){
    const [selectedOption, setSelectedOption] = useState("mayores");
    function renderMayores() {
        return (
        <div>
            <div>
                <Barra></Barra>
                <div className={stilo.contenedor_botones}>
                <button onClick={() => setSelectedOption('inferiores')}>INFERIORES</button>
                <button onClick={() => setSelectedOption('mayores')}>CAT. MAYORES</button>
                </div>
                <div className={stilo.contenedor_partido}>
                    <h2 className={stilo.titu}>PROXIMO PARTIDO</h2>
                    <h3 className={stilo.subtitu}>Categorias Mayores</h3>
                    <div className={stilo.versus}>
                        <div className={stilo.equipos}>
                            <img src={logo} alt="" />
                            <h3>Tiro Federal</h3>
                        </div>
                        <h4>
                            VS
                        </h4>
                        <div className={stilo.equipos}>
                            <h3>EMFI</h3>
                            <img src={escudo_visita} alt="" />
                        </div>
                    </div>
                    <div className={stilo.info_versus}>
                        <div className={stilo.info}><FaMapMarkerAlt className={stilo.fa}></FaMapMarkerAlt><h2>Club Atletico Tiro Federal - Cosquin</h2></div>
                        <div className={stilo.info}><FaRegCalendarAlt className={stilo.fa}></FaRegCalendarAlt><h2>Domingo 20/08</h2></div>
                        <div className={stilo.info}><FaRegClock className={stilo.fa}></FaRegClock><h2>12:00 HS  Inicio de Jornada</h2></div>
                    </div>     
                </div>
            </div>
            <Primera></Primera>
            <Reserva></Reserva>
            <Primera_Fem></Primera_Fem>
            <Reserva_Fem></Reserva_Fem>
        </div>
        );
      }
    function renderInferiores(){
        return (
            <div>
            <div>
                <Barra></Barra>
                <div className={stilo.contenedor_botones}>
                <button onClick={() => setSelectedOption('inferiores')}>INFERIORES</button>
                <button onClick={() => setSelectedOption('mayores')}>CAT. MAYORES</button>
                </div>
                <div className={stilo.contenedor_partido}>
                    <h2 className={stilo.titu}>PROXIMO PARTIDO</h2>
                    <h3 className={stilo.subtitu}>Categorias Inferiores</h3>
                    <div className={stilo.versus}>
                        <div className={stilo.equipos}>
                            <img src={logo} alt="" />
                            <h3>Tiro Federal</h3>
                        </div>
                        <h4>
                            VS
                        </h4>
                        <div className={stilo.equipos}>
                            <h3>SPORTIVO RIVADAVIA</h3>
                            <img src={escudo_visita_inf} alt="" />
                        </div>
                    </div>
                    <div className={stilo.info_versus}>
                        <div className={stilo.info}><FaMapMarkerAlt className={stilo.fa}></FaMapMarkerAlt><h2>Club Atletico Tiro Federal - Cosquin</h2></div>
                        <div className={stilo.info}><FaRegCalendarAlt className={stilo.fa}></FaRegCalendarAlt><h2>Sabado 12/08</h2></div>
                        <div className={stilo.info}><FaRegClock className={stilo.fa}></FaRegClock><h2>09:00 HS  Inicio de Jornada</h2></div>
                    </div>     
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className={stilo.contenedor}>
             {selectedOption === 'inferiores' && renderInferiores()}
             {selectedOption === 'mayores' && renderMayores()}
        </div>   
    )
}