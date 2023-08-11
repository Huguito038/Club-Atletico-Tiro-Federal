import escudo from "../barra/escudo.jpg"
import stilo from "../barra/barra.module.css"
import { Link } from "react-router-dom"
import React from 'react';


export default function Barra() {
    return (
    <div className={stilo.contenedor}>  
        <div className={stilo.club}>
            <img src={escudo} alt=""  className={stilo.escudo}/>
            <div>
                <h1 className={stilo.tilte}>Club Atlético</h1>
                <h1 className={stilo.title_bold}>TIRO FEDERAL</h1>
            </div>
            <div className={stilo.linea}></div>
        </div>
        <div className={stilo.contenedor_botones}>
            <Link  to="/"><button className={stilo.boton}>INICIO</button></Link>
            <Link  to="/actividades"><button className={stilo.boton}>ACTIVIDADES</button></Link>
            <Link  to="/cancha"><button className={stilo.boton}>CANCHA</button></Link>
            <Link  to="/futbol"><button className={stilo.boton}>FUTBOL</button></Link>
            <Link  to="/contacto"><button className={stilo.boton}>CONTACTO</button></Link>
        </div>
        
        
        
    </div>)}