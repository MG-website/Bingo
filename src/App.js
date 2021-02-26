import logo from './logo.svg';
import './App.css';
import Bolillero from './componentes/bolillero';
import Configuracion from './vistas/configuracion';
import Jugador from './vistas/jugador';
import {initSelector, jugadorSelector,} from './utils/selector'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { iniciarJuego } from './slices/cartonSlice';
import Contenido from './vistas/contenido';
import Bolilla from './componentes/bolilla';
import Presentacion from './vistas/presentacion';
import { Route } from 'react-router-dom';
function App() {
const init = useSelector(initSelector)



  return (
    <div className="App">
{/*       
   {init ?
   <>

<Contenido></Contenido>
<Bolilla></Bolilla>
   </> */}
   {/* :  */}
   <Route exact path='/' component={Presentacion}></Route>
   <Route exact path='/juego' component={Contenido}></Route>
   <Route exact path='/juego/jugadores' component={Jugador}></Route>

{/* <footer>
  <p>Desarrollado por Marcos </p>
</footer> */}
   {/* } */}
    </div>
  );
}

export default App;
