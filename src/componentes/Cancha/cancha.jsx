import Barra from "../barra/barra"
import stilo from "../Cancha/cancha.module.css"
import logo from "../barra/escudo.jpg"
import Espacio from "../espacio"
import 'aos/dist/aos.css';
import AOS from "aos";

export default function Cancha (){
    AOS.init()
    
    return(
        <div className={stilo.contenedor}>
            <div className={stilo.contenedor_barra}>
                <Barra></Barra>
                <div>
                  <div data-aos="zoom-in-up" data-aos-duration="1000" className={stilo.contenedor_estadio}>
                    <img src={logo} alt="" />
                    <div className={stilo.barra}></div>
                    <div className={stilo.nombre}>
                        <h2 className={stilo.estadio1}>ESTADIO</h2>
                        <h2 className={stilo.estadio}>KURIAKI ROSALES</h2> 
                    </div>
                </div>     
                </div>
                          
            </div> 
            <div className={stilo.contenedor_maps}>
                <h2  data-aos="zoom-in-up"data-aos-duration="1000" className={stilo.titu2}>¿Donde esta nuestra cancha?</h2>
                <h3 data-aos="fade-right" data-aos-duration="1000"className={stilo.estadio_nav1}>ESTADIO</h3>
                <h3 data-aos="fade-right" data-aos-duration="1000"className={stilo.estadio_nav}>KURIAKI ROSALES</h3>
                    <div className={stilo.mapa}>
                    <iframe title="Google_Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1445.6755299401782!2d-64.47220716339257!3d-31.24856731061316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7bb1c8ae5eb7%3A0xf6ed20d4fa030cfa!2sCANCHA%20DE%20TIRO%20FEDERAL!5e1!3m2!1ses-419!2sar!4v1692058356617!5m2!1ses-419!2sar" width="80%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>  
            </div>
            <div className={stilo.mejoras}>
                <img  className={stilo.loguito} src={logo} alt="" />
                <h2 className={stilo.titu}>Mejoras En la Cancha</h2>
                <div data-aos="fade-right" data-aos-duration="1000"className={stilo.contenedor_novedades}>
                    <div className={stilo.titulares}>
                        <h2 className={stilo.principal}>Nueva Tribuna</h2>
                        <h4>Es con gran emoción y orgullo que anunciamos la creación de una emocionante adición a nuestro amado club de fútbol de pueblo. Como testigos del constante crecimiento y apoyo de nuestra comunidad, es un honor presentar la inauguración de la "Tribuna Alba", una nueva zona de aliento y pasión en nuestro estadio que sin duda elevará la experiencia futbolística de todos nuestros aficionados.
                        Que la inauguración de esta tribuna sea el comienzo de una era dorada para nuestro Club de Fútbol y un símbolo de nuestro compromiso constante con la excelencia deportiva. En cada asiento, en cada paso hacia arriba, se escribirá la historia de nuestro amor por el fútbol y por nuestra comunidad.
                        </h4>
                    </div>
                    <img src="https://i.ibb.co/DY1JR7P/Imagen-de-Whats-App-2023-08-14-a-las-17-39-33.jpg" alt="" />
                </div>
                <div data-aos="fade-right" data-aos-duration="1000"className={stilo.contenedor_novedades_izq}>
                    <img src="https://i.ibb.co/G7D9vxy/Imagen-de-Whats-App-2023-08-14-a-las-17-39-29.jpg" alt="" />
                    <div className={stilo.titulares}>
                        <h2 className={stilo.principal}>Mejoramos el ingreso a nuestra cancha</h2>
                        <h4>Queremos que cada vez que cruces ese portón y pises el adoquinado, sientas la emoción y el orgullo de ser parte de la familia del Club Tiro Federal. Estas mejoras no solo mejoran la apariencia, sino que también reflejan nuestro compromiso constante de brindarte experiencias inolvidables y de la más alta calidad.Te invitamos a unirte a nosotros para disfrutar de esta emocionante temporada en un ambiente que celebra el fútbol, la comunidad y la excelencia. Ya sea que nos visites como aficionado de toda la vida o como nuevo seguidor, te aseguramos que cada instante en el Club Tiro Federal será un recuerdo digno de compartir.</h4>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-duration="1000"className={stilo.contenedor_novedades}>
                    <div className={stilo.titulares}>
                        <h2 className={stilo.principal}>Nuevos bancos de suplentes</h2>
                        <h4>Es un honor para nosotros anunciar que los bancos de suplentes han sido completamente renovados y mejorados para ofrecer la comodidad y el soporte que nuestros equipos merecen. Cada asiento ha sido diseñado pensando en el bienestar de nuestros jugadores, brindándoles el espacio y la ergonomía necesarios para enfocarse en el juego y en su desempeño. Estos nuevos bancos de suplentes no solo son un lugar para esperar el momento de entrar en acción, sino un reflejo de nuestra dedicación para brindar el mejor entorno posible para el desarrollo del talento y el espíritu de equipo. Cada jugador sentirá el apoyo y la importancia que merece, contribuyendo a elevar el rendimiento y la moral en cada partido.</h4>
                    </div>
                    <img src="https://i.ibb.co/tDJcwnh/bancos.jpg" alt="" />
                </div>
                <Espacio></Espacio>
            </div>                 
        </div>
        
    )
}