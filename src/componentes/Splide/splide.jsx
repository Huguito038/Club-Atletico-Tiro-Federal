import { Splide, SplideSlide } from '@splidejs/react-splide';
import stilo from "../Splide/splide.module.css"
import '@splidejs/react-splide/css/sea-green';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Splides({url}){
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
                rewind: true,
                width:1200,
                arrows: false, // Show arrows
                pagination: true, // Show pagination dots
                gap  :'1rem',
                } } aria-label="My Favorite Images">
                {url.map((item,index)=>(
                     <SplideSlide key={index} >
                        <div className={stilo.triang}>
                            <img className={stilo.img} src={item.url} alt="" />
                        </div>
                       
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
                    width:1300,
                    arrows: true, // Show arrows
                    pagination: false, // Show pagination dots
                    gap  :'1rem',
                    } } aria-label="My Favorite Images">
                    {url.map((item,index)=>(
                        <SplideSlide key={index} >
                            <div className={stilo.triang}>
                                <img className={stilo.img} src={item.url} alt="" />
                            </div>
                        
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            
        </div>

    )
}