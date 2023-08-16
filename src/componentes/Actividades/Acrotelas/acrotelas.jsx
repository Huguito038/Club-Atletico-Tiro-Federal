import Barra from "../../barra/barra";
import stilo from "../Acrotelas/acrotelas.module.css"
import Pie from "../../pie/pie";
import { Link } from "react-router-dom";
import { FaAngleLeft} from "react-icons/fa"


export default function Acrotelas() {
  return (
    <div className={stilo.contenedor_total}>
      <div className={stilo.total_info}>
        <Barra></Barra>
        <Link style={{textDecoration:"none"}}to="/actividades"><button className={stilo.boton_nav}><FaAngleLeft></FaAngleLeft>VOLVER</button></Link>
        <div className={stilo.titu}>
          <h2>ACROTELAS</h2>
        </div>
        <div className={stilo.triangulo}></div> {/* Triángulo como fondo */}
        <div className={stilo.contenedor_info}>
          <div className={stilo.info}>
            <h2>Horarios:</h2>
            <h4>Lunes: 20hs a 22hs</h4>
            <h4>Lunes: 20hs a 22hs</h4>
            <h4>Lunes: 20hs a 22hs</h4>
            <h2>Lugar:</h2>
            <h4>Club altetico Tiro Federal - CENTRO</h4>
            <h2>Profesor:</h2>
            <h4>Jackie Chan</h4>
            <h2>Telefono de Contacto:</h2>
            <h4>3541 - 2343567</h4>
          </div>
          <div className={stilo.foto}></div>
        </div>
      </div>
      <div className={stilo.space_movile}></div>

      <Pie></Pie>
    </div>
  );
}


