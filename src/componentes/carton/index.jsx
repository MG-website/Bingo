import React from 'react'
import { createCarton, createSpace } from '../../utils/index'
import {Td} from '../styles/index'
function LineaCarton({carton, linea, idJugador}) {





return (

    carton.map((j,i) =>(
      

              <Td key={i+linea} id={`${idJugador}${linea}${i}`} >
                {j[linea] !== ' ' ? j[linea] : ' ' }
            </Td> 

        )) 
)

}

export default LineaCarton
