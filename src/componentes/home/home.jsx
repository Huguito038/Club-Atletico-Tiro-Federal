import stilo from "../home/home.module.css"
import Barra from "../barra/barra"
import Slider from "../Slider/slider"
import Pie from "../pie/pie"
import Mejoras from "../mejoras/mejoras"
import Espacio from "../espacio"



export default function Home() {
   return (
    <div className={stilo.todo}>
        <div className={stilo.contenedor}>  
        <div className={stilo.triangulo}></div>
        <Barra></Barra>
        </div>
        <Slider></Slider>
        <Mejoras></Mejoras>
        <Espacio></Espacio>
        <Pie></Pie>
    </div>
   )}