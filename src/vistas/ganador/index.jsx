import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ButtonIngresar, ContainerGanador, ContainerImg } from '../../componentes/styles';
import { finalizarJuego } from '../../slices/cartonSlice';

function Ganador({ganadores}) {
    const{linea, cartonLleno} = ganadores;
    const dispatch = useDispatch()
    const history =  useHistory()

    const handleVolver = ()=>{
        dispatch(finalizarJuego())
        history.push('/')
    }
    
    useEffect(()=>{

    },[])
    return (
        <ContainerGanador >
            <div style={{display:'flex', flexDirection:'column',paddingTop: '234px'}}>

            <h1>CARTON GANADOR:{' '+cartonLleno}</h1>
            <h3>PREMIO A LA LINEA:{' '+linea}</h3>
            </div>            
            <ButtonIngresar onClick={handleVolver}> Volver a Jugar</ButtonIngresar>
        </ContainerGanador>
    )
}

export default Ganador
