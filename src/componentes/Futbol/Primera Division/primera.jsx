import stilo from "../Primera Division/primera.module.css"
import tabla from "../Primera Division/Tabla.jpg"
import video from "../Primera Division/video.mp4"
import React, { useState } from 'react';
import foto from "../Primera Division/foto.jpg"

export default function Primera (){
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
      setShowVideo(!showVideo);
    };
    return (
        <div>
            <div className={stilo.contenedor_titulo}>
                <div className={stilo.linea}></div>
                <h2 className={stilo.titu}>PRIMERA MASCULINA</h2>
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