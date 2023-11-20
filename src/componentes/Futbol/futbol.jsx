import Barra from "../barra/barra"
import stilo from "../Futbol/futbol.module.css"
import logo from "../barra/escudo.jpg"
import {FaMapMarkerAlt,FaRegCalendarAlt,FaRegClock} from "react-icons/fa"
import Categorias from "./Categorias/categorias"
import { useState } from "react"
import {primeraM,reservaM,primeraF, reservaF,rivalM} from "../data"
import Pie from "../pie/pie"
import Espacio from "../espacio"
import { mayores,inferiores } from "../info_proximo"
import { URL_cuarta,URL_quinta,URL_sexta,URL_septima,URL_octava,URL_novena,cuarta,quinta,sexta,septima,octava,novena,rival } from "../data_inferiores"
import 'aos/dist/aos.css';



export default  function Futbol(){
    const [selectedOption, setSelectedOption] = useState("mayores");
    function renderMayores() {
        return (
        <div>
            <div>
                <Barra></Barra>
                <div className={stilo.contenedor_partido}>
                    <h2 className={stilo.titu}>PROXIMO PARTIDO</h2>
                    <h3 className={stilo.subtitu}>Categorias Mayores</h3>
                    <div className={stilo.versus}>
                        <div className={stilo.equipos}>
                            <img data-aos="zoom-in-up"data-aos-duration="1000" src={logo} alt="" />
                            <h3 data-aos="zoom-in-up"data-aos-duration="1000">Tiro Federal</h3>
                        </div>
                        <h4>
                            VS
                        </h4>
                        <div className={stilo.equipos}>
                            <h3 data-aos="zoom-in-up"data-aos-duration="1000">{mayores.rival}</h3>
                            <img data-aos="zoom-in-up"data-aos-duration="1000"src={mayores.rival_img} alt="" />
                        </div>
                    </div>
                    <div className={stilo.info_versus}>
                        <div className={stilo.info}><FaMapMarkerAlt className={stilo.fa}></FaMapMarkerAlt><h2>{mayores.lugar}</h2></div>
                        <div className={stilo.info}><FaRegCalendarAlt className={stilo.fa}></FaRegCalendarAlt><h2>{mayores.dia}</h2></div>
                        <div className={stilo.info}><FaRegClock className={stilo.fa}></FaRegClock><h2>{mayores.hora}</h2></div>
                    </div>     
                </div>
            </div>
            <div className={stilo.contenedor_botones}>
                <button onClick={() => setSelectedOption('inferiores')}>INFERIORES</button>
                <button onClick={() => setSelectedOption('mayores')}>CAT. MAYORES</button>
            </div>
            <Categorias data={primeraM.fotos} info={primeraM} rival={rivalM}></Categorias>
            <Categorias data={reservaM.fotos} info={reservaM} rival={rivalM}></Categorias>
            <Categorias data={primeraF.fotos} info={primeraF} rival={rivalM}></Categorias>
            <Categorias data={reservaF.fotos} info={reservaF} rival={rivalM}></Categorias>
        </div>
        );
      }
    function renderInferiores(){
        return (
            <div>
            <div>
                <Barra></Barra>
                <div className={stilo.contenedor_partido}>
                    <h2 className={stilo.titu}>PROXIMO PARTIDO</h2>
                    <h3 className={stilo.subtitu}>Categorias Inferiores</h3>
                    <div className={stilo.versus}>
                        <div className={stilo.equipos}>
                            <img data-aos="zoom-in-up"data-aos-duration="1000"src={logo} alt="" />
                            <h3 data-aos="zoom-in-up"data-aos-duration="1000">Tiro Federal</h3>
                        </div>
                        <h4>
                            VS
                        </h4>
                        <div className={stilo.equipos}>
                            <h3 data-aos="zoom-in-up"data-aos-duration="1000">{inferiores.rival}</h3>
                            <img data-aos="zoom-in-up"data-aos-duration="1000" src={inferiores.rival_img} alt="" />
                        </div>
                    </div>
                    <div className={stilo.info_versus}>
                        <div className={stilo.info}><FaMapMarkerAlt className={stilo.fa}></FaMapMarkerAlt><h2>{inferiores.lugar}</h2></div>
                        <div className={stilo.info}><FaRegCalendarAlt className={stilo.fa}></FaRegCalendarAlt><h2>{inferiores.dia}</h2></div>
                        <div className={stilo.info}><FaRegClock className={stilo.fa}></FaRegClock><h2>{inferiores.hora}</h2></div>
                    </div>     
                </div>
            </div>
            <div className={stilo.contenedor_botones}>
                <button className={stilo.boton} onClick={() => setSelectedOption('inferiores')}>INFERIORES</button>
                <button className={stilo.boton} onClick={() => setSelectedOption('mayores')}>CAT. MAYORES</button>
                </div>
            <Categorias data={quinta.fotos} info={cuarta} rival={rival}></Categorias>
            <Categorias data={cuarta.fotos} info={quinta} rival={rival}></Categorias>
            <Categorias data={sexta.fotos} info={sexta} rival={rival}></Categorias>
            <Categorias data={septima.fotos} info={septima} rival={rival} ></Categorias>
            <Categorias data={octava.fotos} info={octava} rival={rival}></Categorias>
            <Categorias data={novena.fotos} info={novena} rival={rival}></Categorias>
        </div>
        )
    }
    return (
        <div className={stilo.contenedor}>
             {selectedOption === 'inferiores' && renderInferiores()}
             {selectedOption === 'mayores' && renderMayores()}
             <Espacio></Espacio>
             <Pie></Pie>
        </div>   
    )
}