import { Splide, SplideSlide } from '@splidejs/react-splide';
import stilo from "../Splide/splide.module.css"
import '@splidejs/react-splide/css/sea-green';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Splides({data}){
    AOS.init();
    return(
        <div className={stilo.conte}>
            <div className={stilo.splide_nav}>
            <Splide options={ {
                type:"loop",
                loop:true,
                autoplay:true,
                updateOnMove:true,
                perPage:1,
                drag:true,
                interval:3000,
                width:"100%",
                rewind: true,
                arrows: false,
                pagination: true, // Show pagination dots
                gap  :'1rem',
                } } aria-label="My Favorite Images">
                {data?.map((path,index)=>(
                     <SplideSlide key={index} >
                        <img className={stilo.img} src={path} alt="" />
                    </SplideSlide>
                ))}
            </Splide>
            </div>
            <div className={stilo.splide_normal}>
                    <Splide options={ {
                    type:"loop",
                    loop:true,
                    autoplay:true,
                    updateOnMove:true,
                    perPage:2,
                    drag:true,
                    interval:3000,
                    rewind: true,
                    width:"100%",
                    arrows: true, // Show arrows
                    pagination: false, // Show pagination dots
                    gap  :'1rem',
                    } } aria-label="My Favorite Images">
                    {data?.map((path,index)=>(
                        <SplideSlide key={index} >
                            <img className={stilo.img} src={path} alt="" />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            
        </div>

    )
}