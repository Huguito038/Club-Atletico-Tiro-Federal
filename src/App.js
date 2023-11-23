import { Route,Routes,useLocation} from 'react-router-dom';
import Home from "./componentes/home/home"
import Contacto from './componentes/Contacto/contacto';
import Cancha from './componentes/Cancha/cancha';
import Futbol from './componentes/Futbol/futbol';
import Actividades from './componentes/Actividades/actividades';
import Patin from './componentes/Actividades/Patin/patin';
import Teakwondo from './componentes/Actividades/Teakwondo/taekwondo';
import Acrotelas from './componentes/Actividades/Acrotelas/acrotelas';
import Pilates from './componentes/Actividades/Pilates/pilates';
import { useEffect } from 'react';

import './App.css';

function App() {
   function ScrollToTop() {
      const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return null;
      
    }
  return (
    <div className='App'>
      <ScrollToTop />
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/cancha' element={<Cancha/>}/>
          <Route path='/actividades' element={<Actividades></Actividades>}/>
          <Route path='/futbol' element={<Futbol></Futbol>}/>
          <Route path='/actividades/patin' element={<Patin></Patin>}/>
          <Route path='/actividades/teakwondo' element={<Teakwondo></Teakwondo>}/>
          <Route path='/actividades/acrotelas' element={<Acrotelas></Acrotelas>}/>
          <Route path='/actividades/pilates' element={<Pilates></Pilates>}/>
       </Routes>
    </div>
 )
}

export default App;
