import React from 'react'
import { useSelector } from 'react-redux'
import { jugadorSelector } from '../../utils/selector'
import Carton from '../carton'

function Jugador() {
  const jugadores =  useSelector(jugadorSelector);
  const keys = Object.keys(jugadores)

 return  keys.map((e,i) => {
      
    if(e !== 'status' && e !== 'init' && e!== 'automatico'){
        
        return (
            <div key={i + 100}>
                
                <Carton  cartonJugador={jugadores[e].nombre} player={e}></Carton>
            </div>
        )
    }else{
        return null
    }
      
  })
}


export default Jugador
