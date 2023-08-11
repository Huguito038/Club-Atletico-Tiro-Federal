import Barra from "../../barra/barra";
import stilo from "../Pilates/pilates.module.css"
import Pie from "../../pie/pie";


export default function Pilates() {
  return (
    <div className={stilo.contenedor_total}>
      <div className={stilo.total_info}>
        <Barra></Barra>
        <div className={stilo.titu}>
          <h2>PILATES</h2>
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

      <Pie></Pie>
    </div>
  );
}

