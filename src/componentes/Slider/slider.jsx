import stilo from "../Slider/slider.module.css"
import tucan from "./logo_1.png"
import modo_fit from "./logo_2.jpg"
import amoblar from "./logo_3.jpg"
import abran_cancha from "./logo_4.jpg"
import heladeria from "./logo_5.png"
import punto_baterias from "./logo_6.jpg"
import villamar from "./logo_7.png"
import morresi from "./logo_8.png"
import bakeria from "./logo_9.jpg"
import farmacia from "./logo_10.png"


export default function Slider() {
    return (
        <div className={stilo.beneficios}>
            <h2 className={stilo.title_beneficio}>SUMATE Y OBTENE BENEIFCIOS</h2>
            <h2 className={stilo.subtitlte_beneficio}>¡Conoce nuestros negocios amigos!</h2>
        <div className={stilo.slider}>
                <div className={stilo.slider_track}>
                    <div className={stilo.slider_img}>
                        <img src={tucan} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={modo_fit} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={amoblar} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={abran_cancha} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={heladeria} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={punto_baterias} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={villamar} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={morresi} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={bakeria} alt="" className={stilo.imagen_slider}/>
                    </div>
                    <div className={stilo.slider_img}>
                        <img src={farmacia} alt="" className={stilo.imagen_slider}/>
                    </div>
                   
                   

                </div>
         </div>
        </div>
   )}