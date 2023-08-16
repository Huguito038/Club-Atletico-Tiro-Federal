import stilo from "../home/home.module.css"
import Barra from "../barra/barra"
import Slider from "../Slider/slider"
import Pie from "../pie/pie"
import Mejoras from "../mejoras/mejoras"
import Espacio from "../espacio"
import logo from "../barra/escudo.jpg"



export default function Home() {
   return (
    <div className={stilo.todo}>
        <div className={stilo.contenedor}>  
            <Barra ></Barra>
            <div className={stilo.cont}>
                <img src={logo} alt="" />
                 <div className={stilo.club}>
                    <h2>CLUB ATLETICO</h2>
                    <h3>TIRO FEDERAL</h3>
                 </div>
            </div>
           
        </div>
        <Slider></Slider>
        <Mejoras></Mejoras>
        <Espacio></Espacio>
        <Pie></Pie>
    </div>
   )}