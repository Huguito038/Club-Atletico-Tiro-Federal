import stilo from "../Primera Division Fem/primera.module.css"
import tabla from "../Primera Division Fem/Tabla.jpg"
import video from "../Primera Division Fem/video.mp4"
import React, { useState } from 'react';
import foto from "../Primera Division Fem/foto.jpg"

export default function Primera_Fem (){
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
      setShowVideo(!showVideo);
    };
    return (
        <div>
            <div className={stilo.contenedor_titulo}>
                <div className={stilo.linea}></div>
                <h2 className={stilo.titu}>PRIMERA FEMENINA</h2>
            </div>
            <div className={stilo.tabla_video}>
                <img className={stilo.tabla} src={tabla} alt="" />
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
            </div>
        </div>
    )
}