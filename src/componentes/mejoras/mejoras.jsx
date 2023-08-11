import stilo from "../mejoras/mejoras.module.css"


export default function Mejoras(){
    return(
        <div className={stilo.contenedor}>
            <h2 className={stilo.title}>Mira las novedades en el Club</h2>
            <div className={stilo.info_foto}>
                <div className={stilo.info}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti repellendus voluptatibus voluptates tenetur animi ducimus similique maiores nemo exercitationem. Explicabo cupiditate . 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ullam saepe consequatur veritatis illo culpa, ut distinctio explicabo quaerat quam, similique assumenda dolore vitae accusantium nulla? Quae facilis eligendi ab eius.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti repellendus voluptatibus voluptates tenetur animi ducimus similique maiores nemo exercitationem. Explicabo cupiditate . 
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ullam saepe consequatur veritatis illo culpa, ut distinctio explicabo quaerat quam, similique assumenda dolore vitae accusantium nulla? Quae facilis eligendi ab eius.
                    </h2>
                </div>
                <div className={stilo.contenedor_carnet}>
                    <div className={stilo.frente}>
                    </div>
                    <div className={stilo.atras}>
                    </div>
                </div>
                
            </div>

        </div>
    )
}