import logo from "../barra/escudo.jpg"
import stilo from "../pie/pie.module.css"
import { FaFacebookF,FaInstagram,FaTwitter,FaCode} from "react-icons/fa"
import tucan from "../Slider/logo_1.png"
import modo_fit from "../Slider/logo_2.jpg"
import amoblar from "../Slider/logo_3.jpg"
import abran_cancha from "../Slider/logo_4.jpg"
import heladeria from "../Slider/logo_5.png"
import punto_baterias from "../Slider/logo_6.jpg"
import villamar from "../Slider/logo_7.png"
import morresi from "../Slider/logo_8.png"
import bakeria from "../Slider/logo_9.jpg"
import farmacia from "../Slider/logo_10.png"
import React from 'react';

 

export default function Pie() {

    return (
       <div className={stilo.contenedor}>
         <img  className={stilo.img} src={logo} alt="" />
            <div className={stilo.sponsors}>
                    <div className={stilo.logos}>
                            <img src={tucan} alt="" className={stilo.logotipos} />
                            <img src={modo_fit} alt="" className={stilo.logotipos} />
                            <img src={heladeria} alt="" className={stilo.logotipos} />
                            <img src={farmacia} alt="" className={stilo.logotipos} />
                            <img src={abran_cancha} alt="" className={stilo.logotipos} />
                            <img src={amoblar} alt="" className={stilo.logotipos} />
                            <img src={villamar} alt="" className={stilo.logotipos} />
                            <img src={punto_baterias} alt="" className={stilo.logotipos} />
                            <img src={morresi} alt="" className={stilo.logotipos} />
                            <img src={bakeria} alt="" className={stilo.logotipos} />
                                                                  
                    </div>
            </div>
        <div className={stilo.contenedor_info}>
            <div  className={stilo.info}>
                <h1>CLUB ATLÉTICO TIRO FEDERAL</h1>
                <h3>San Martin 1452</h3>
                <h3>Cosquin,Cordoba,Argentina</h3>
                <h3>tirofederal@gmail.com</h3>
            </div>
            <div className={stilo.iconos}>
                <FaFacebookF className={stilo.face}></FaFacebookF>
                <FaInstagram className={stilo.insta}></FaInstagram>
                <FaTwitter className={stilo.tw}></FaTwitter>
            </div>
        </div>
        <div className={stilo.footer_cont}> 
             <FaCode className={stilo.footer_logo}></FaCode>
            <h2>coded by ACHEESE</h2>
        </div>
       </div>
   )}