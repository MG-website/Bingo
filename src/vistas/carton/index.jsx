import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LineaCarton from '../../componentes/carton'
import { createCarton, createSpace } from '../../utils/index'
import {crearCartonSync, eliminarJugador} from '../../slices/cartonSlice'
import { initSelector, jugadorSelector } from '../../utils/selector'
import { ButtonIngresar, Table } from '../../componentes/styles'


function Carton(props) {
    const{cartonJugador,player}=props
const[carton,setCarton] =useState(null) 
const dispatch= useDispatch()
let arr = player.split('')
const idJugador = arr[arr.length -1]
const init =  useSelector(initSelector)
    const jugador = useSelector(jugadorSelector)[player]
const siguienteCarton = ()=>{
    setCarton(createSpace(createCarton()))

}


const handleSelect =()=>{
    dispatch(crearCartonSync({carton,player}))
}

const handleDelete = ()=>{
    dispatch(eliminarJugador(player))
}
useEffect(()=>{
    if(!carton){

        setCarton(createSpace(createCarton()))
    }
},[carton,cartonJugador, init])

    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'end', alignItems:'center', width:'100%',marginInlineEnd: '61px',    marginBottom: '40px',}}>
            <h3  key={idJugador + 'j' + 't'} >{cartonJugador}</h3>
            {Boolean(jugador.linea) && <h4>FELICIDADES HICISTE LINEA</h4>}
        {carton && carton.length > 0 && cartonJugador &&
        <Table  color={idJugador == 1 ? '#4f4fec' : idJugador ==2 ? '#e23131': idJugador == 3 ? 'green': 'orange'} >
            <tbody >
              <tr  >
                  <LineaCarton  carton={carton} linea ={0} idJugador={idJugador}></LineaCarton>
              </tr>
              <tr >
                  <LineaCarton  carton={carton} linea ={1} idJugador={idJugador}></LineaCarton>
              </tr>
              <tr>
                  <LineaCarton   carton={carton} linea ={2} idJugador={idJugador}></LineaCarton>
              </tr>
            </tbody>
        </Table>

        }
        {!init && 
        <div>
        <ButtonIngresar key={idJugador + 'j' + 1} style={{margin: '0px 3px', width:'auto' }} onClick={ handleSelect}> seleccionar carton</ButtonIngresar>
        <ButtonIngresar key={idJugador + 'j' + 2} style={{margin: '0px 3px', width:'auto' }} onClick={ siguienteCarton}> siguiente carton</ButtonIngresar>
        <ButtonIngresar key={idJugador + 'j' + 3} style={{margin: '0px 3px', width:'auto' }} onClick={handleDelete}>Eliminar jugador</ButtonIngresar>
        </div>
        }

        </div>
    )
}

export default Carton
