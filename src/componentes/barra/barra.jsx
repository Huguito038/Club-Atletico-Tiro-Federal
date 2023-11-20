import escudo from "../barra/escudo.jpg"
import stilo from "../barra/barra.module.css"
import { Link } from "react-router-dom"
import React from 'react';
import { useState,useEffect} from "react";


export default function Barra() {
    const [isMenuOpen, SetActive] = useState(false)

    const toggleMenu = ()=>{
        SetActive(!isMenuOpen)
    }
    const closeMenuOnPageChange = () => {
        SetActive(false);
      };

    useEffect(() => {
        window.addEventListener('hashchange', closeMenuOnPageChange);
        return () => {
          window.removeEventListener('hashchange', closeMenuOnPageChange);
        };
      }, []);
    return (
    <div className={stilo.contenedor}>
            <button className={stilo.toggleButton} onClick={toggleMenu}>
                    <span className={stilo.bar_}></span>
                    <span className={stilo.bar_}></span>
                    <span className={stilo.bar_}></span>
            </button>
            <img className={stilo.logo_nav} src={escudo} alt="" />
            <div className={`${stilo.navbar} ${isMenuOpen ? stilo.open : ''}`}>
                <button className={stilo.toggleButton} onClick={toggleMenu}>
                    <span className={stilo.bar}></span>
                    <span className={stilo.bar}></span>
                    <span className={stilo.bar}></span>
                </button>
                <nav className={stilo.navMenu}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/actividades">ACTIVIDAES</Link></li>
                        <li><Link to="/cancha">cancha</Link></li>
                        <li><Link to="/futbol">futbol</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </nav>
            </div>
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
                <Link  to="/cancha"><button className={stilo.boton}>CaNCHA</button></Link>
                <Link  to="/futbol"><button className={stilo.boton}>FUTBOL</button></Link>
                <Link  to="/contacto"><button className={stilo.boton}>CONTACTO</button></Link>
            </div>     
    </div>)}