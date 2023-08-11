import stilo from "../Reserva/reserva.module.css"
import tabla from "../Reserva/Tabla.jpg"
import video from "../Reserva/video.mp4"
import React, { useState } from 'react';
import foto from "../Reserva/foto.jpg"

export default function Reserva (){
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
      setShowVideo(!showVideo);
    };
    return (
        <div>
            <div className={stilo.contenedor_titulo}>
                <h2 className={stilo.titu}>RESERVA MASCULINA</h2>
                <div className={stilo.linea}></div>
            </div>
            <div className={stilo.tabla_video}>
                
            <div className={stilo.video_click}>
            {showVideo ? (
                <video className={stilo.video}src={video} autoPlay loop muted
                onClick={toggleVideo} style={{ cursor: 'pointer' }}></video>
            ) : (
                <img
                className={stilo.foto}
                src={foto}
                alt="Imagen"
                onClick={toggleVideo}
                style={{ cursor: 'pointer' }}
                />
            )}
        </div>
    <img className={stilo.tabla} src={tabla} alt="" />
            </div>
        </div>
    )
}