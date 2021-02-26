import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonIngresar, ContainerPresentacion } from '../../componentes/styles'
function Presentacion() {
    
    const history = useHistory()
    return (
        <ContainerPresentacion>
            <ButtonIngresar onClick={()=> {history.push('/juego') }}>COMENZAR BINGO</ButtonIngresar>
        </ContainerPresentacion>
        
    )
}

export default Presentacion
