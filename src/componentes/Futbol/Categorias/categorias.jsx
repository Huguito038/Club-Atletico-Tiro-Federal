import stilo from "../Categorias/categorias.module.css"
import Splides from "../../Splide/splide"
import '@splidejs/react-splide/css';
import logo from "../../barra/escudo.jpg"
import 'aos/dist/aos.css';


export default function Categorias ({data,info,rival}){
    return(
        <div data-aos="fade-right"data-aos-duration="2500" className={stilo.contenedor}>
            <div className={stilo.contenedor_titulo}>
                <div className={stilo.linea}></div>
                <h2 className={stilo.titu}>{info.titulo}</h2>

            </div>
            <h2 className={stilo.titulo_resu}>Ultimo Resultado</h2>
            <div className={stilo.contenedor_resultado}>
                <div className={stilo.equipos}>
                    <h3>Tiro Federal</h3>
                    <img className={stilo.image} src={logo} alt="" />
                </div>
                <div className={stilo.goles}>
                    <p>{info.goles_favor}</p>
                    <h4>-</h4>
                    <p>{info.goles_contra}</p>
                </div>
                <div className={stilo.equipos}>
                    <img className={stilo.image} src={rival.img} alt="" />
                    <h3>{rival.equipo}</h3>
                </div>

            </div>
                <Splides url={data}></Splides>
        </div>
    )
};
   