import { Route,Routes} from 'react-router-dom';
import Home from "./componentes/home/home"
import Contacto from './componentes/Contacto/contacto';
import Cancha from './componentes/Cancha/cancha';
import Futbol from './componentes/Futbol/futbol';
import Actividades from './componentes/Actividades/actividades';
import Patin from './componentes/Actividades/Patin/patin';
import Teakwondo from './componentes/Actividades/Teakwondo/taekwondo';
import Acrotelas from './componentes/Actividades/Acrotelas/acrotelas';
import Pilates from './componentes/Actividades/Pilates/pilates';

import './App.css';

function App() {


  return (
    <div className='App'>
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
