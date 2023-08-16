import stilo from "../Contacto/contacto.module.css"
import {FaCaretLeft,FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaWhatsapp} from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../barra/escudo.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contacto(){
    AOS.init();
    return(
        <div>
             <div className={stilo.contenedor}>
                <div data-aos="fade-right" className={stilo.barra}>
                <img className={stilo.img} src={logo} alt="" />
                <div className={stilo.linea_titu}>
                    <div className={stilo.linea}></div>
                    <div className={stilo.titu}>¡ponete en contacto <br /> con nosotros!</div>
                </div>
                <Link to="/">
                    <button className={stilo.boton}>
                        <div className={stilo.boton_cosas}>
                            <FaCaretLeft></FaCaretLeft>
                            <h2>Volver</h2>
                        </div>
                    </button>
                </Link>
            </div>
            <div data-aos="zoom-in" className={stilo.contacto_contendeor}>
                <div className={stilo.contacto_up}>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <h2>San Martin 1041 | Cosquin , Cordoba</h2>
                </div>
                <div>
                    <FaPhoneAlt></FaPhoneAlt>
                    <h2>3541 - 345678</h2>
                </div>
                <div>
                    <FaEnvelope></FaEnvelope>
                    <h2>tirofederal@gmail.com</h2>
                </div>
                <button>
                    <FaWhatsapp></FaWhatsapp>
        
                    <h2>Contactanos por Whatsapp</h2>
                </button>
            </div>
        </div>
        </div>
       

        
    )
}