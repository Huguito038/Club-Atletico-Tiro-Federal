import stilo from "../mejoras/mejoras.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";


export default function Mejoras(){
    const [girado, setGirado] = useState(false);

    const handleClic = () => {
        setGirado(!girado);
    };
    
    AOS.init();


    return(
        <div className={stilo.contenedor}>
            <h2 className={stilo.title}>Mira las novedades en el Club</h2>
            <div className={stilo.info_foto}>
                <div data-aos="fade-right" className={stilo.info}>
                    <h1> ¡Descubre el Nuevo Carnet de Beneficios Exclusivos del Club Atlético Tiro Federal de Cosquín!</h1>
                    <h2>¡Atención a todos los alumnos y miembros del Club Atlético Tiro Federal de Cosquín! Es un placer presentarles nuestra última innovación que hará que formar parte de nuestra comunidad sea aún más gratificante. Estamos emocionados de anunciar el lanzamiento de nuestro nuevo "Carnet de Beneficios", diseñado para brindarte ventajas excepcionales en los comercios aliados de nuestra hermosa ciudad.</h2>
                    <h1>¡Tu Acceso a Descuentos en la Ciudad! </h1>
                    <h2>Nuestro Carnet de Beneficios no solo es una forma de ahorrar, sino también una invitación a descubrir tu ciudad de una manera completamente nueva. Explora los rincones ocultos, prueba restaurantes que quizás nunca habías considerado y vive cada día como una aventura emocionante.</h2>
                </div>
                <div className={`${stilo.contenedor_carnet} ${girado ? stilo.contenedor_carnet_gira : ''}`}
                    onClick={handleClic} >
                    <div className={stilo.frente}>
                    </div>
                    <div className={stilo.atras}>
                    </div>
                </div>
                
                
            </div>

        </div>
    )
}