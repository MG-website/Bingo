import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bolillero from '../../componentes/bolillero'
import { ButtonIngresar } from '../../componentes/styles'
import { iniciarJuego } from '../../slices/cartonSlice'
import { initSelector, jugadorSelector, statusSelector } from '../../utils/selector'
import Configuracion from '../configuracion'
import Ganador from '../ganador'
import Jugador from '../jugador'

function Contenido() {
    const jugadores= useSelector(jugadorSelector)
    const status = useSelector(statusSelector)
    const dispatch= useDispatch()
     const init = useSelector(initSelector)
    const [iniciar,setIniciar] = useState(false)
  const [premio, setPremio] = useState({linea:false, cartonLleno:false})
    
const handleInit =()=>{
    dispatch(iniciarJuego())
  }
    const verificar = ()=>{
        let keys = Object.keys(jugadores)
        let datos = keys.filter(e => e !== 'status' && e!== 'init' && e!== 'automatico')
        if(datos.length >0){
            let arr = datos.filter(e =>  jugadores[e].carton.length > 0)
          if(arr.length == datos.length) {
            setIniciar(true)
            }else{
                setIniciar(false)
            }
        }else{
            setIniciar(false)
        }
      }
      const ganador = ()=>{
        let keys = Object.keys(jugadores)
        
        keys.map(e=>{
          if(Boolean(jugadores[e].cartonLleno) && !premio.cartonLleno){
            setPremio({...premio, cartonLleno:jugadores[e].nombre})
          }
          if(Boolean(jugadores[e].linea && !premio.linea)){
            setPremio({...premio, linea:jugadores[e].nombre})
          }
          
         
        })

      }
      useEffect(()=>{
    
        ganador()
        verificar();
      },[iniciar, status, jugadores])
    return (
        <div>
        {iniciar  && !init? 
        <ButtonIngresar key={'inciiar'} onClick={handleInit} > INICIAR JUEGO</ButtonIngresar>
        :  !init ? <Configuracion></Configuracion> : null
        }
        {premio.cartonLleno? 
        <Ganador ganadores={premio}></Ganador>
        :
        <>
          <Bolillero></Bolillero>
        <div style={{    display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between'}}>
        <Jugador></Jugador>
        </div>
        </>
        }
        </div>
    )
}

export default Contenido
