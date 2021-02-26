import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { tachar, linea, cartonLleno, finalizarJuego } from '../../slices/cartonSlice'
import { createValues, searchNum } from '../../utils'
import { jugadorSelector, statusSelector, initSelector, automaticoSelector} from '../../utils/selector'
import Bolilla from '../bolilla'
import { Bola, BolaContent, ButtonIngresar } from '../styles'
function Bolillero() {
    const [numeros, setNumeros] = useState([])
    const [bolilla, setBolilla] = useState(0)
    const [premio, setPremio] = useState({linea:null})

    const sacarNum = () => {
        let index = Math.floor(Math.random() * (numeros.length - 1 - 1)) + 1
        let canasta = numeros.filter((e, i) => i !== index)
        setNumeros(canasta)
        setBolilla(numeros[index])
    }
    const reiniciar = () => {
        setNumeros(createValues(90))
    }
    const status = useSelector(statusSelector)    
    const cartonJugador = useSelector(jugadorSelector)
    const init = useSelector(initSelector)
    const auto = useSelector(automaticoSelector)
    const dispatch = useDispatch()
    
    useEffect(() => {

        if (bolilla > 0 && status === 'exitoso' && init) {
               let keys = Object.keys(cartonJugador)
               let datos = keys.filter(e => e!== 'status' && e!== 'init' && e!== 'automatico')
               datos.map(key =>{
                           
                           let numero = searchNum(cartonJugador[key].carton, bolilla)
                           if(numero){
                               let arr = key.split('')
                               let id = `${arr[arr.length -1]}${numero}`
                               if(document.getElementById(id).style.backgroundColor !== 'gray' ){

                                   document.getElementById(id).style.backgroundColor = 'gray' 
                                   dispatch(tachar({ jugador:key, num: bolilla }))
                               }

                            }
                            let l1 = cartonJugador[key].linea1.filter(e => typeof e ==='number').length
                            let l2 = cartonJugador[key].linea2.filter(e => typeof e ==='number').length
                            let l3 = cartonJugador[key].linea3.filter(e => typeof e ==='number').length
                                if(l1 === 0 || l2 === 0 || l3 ===0){
                                        if(!Boolean(cartonJugador[key].linea)){
                                            dispatch(linea(key))
                                        }
                                }
                                if(l1 === 0 && l2 === 0 && l3 ===0){
                                    if(!Boolean(cartonJugador[key].cartonLleno)){
        
                                        dispatch(cartonLleno(key))
                                    }
                            }
                           
               })
   

         }
    }, [bolilla,cartonJugador])

if(init){

    return (
        <div>
            <h1> Bolillero</h1>
            <div style={{ margin:'auto', textAlign:'center'}}>
                    <Bolilla num = {bolilla > 0 && bolilla}>
                    {bolilla > 0 && bolilla}  
                    </Bolilla>
     

            </div>
        
            
            <ButtonIngresar id='btn' onClick={numeros.length !== 0 ? sacarNum : reiniciar}>
                {numeros.length !== 0 ? 'Sacar Numero' : 'Cargar Numeros'}
            </ButtonIngresar>
            <Link to='/'>
        <ButtonIngresar onClick={ ()=>dispatch(finalizarJuego())}> Salir</ButtonIngresar>
        </Link>
            
        </div>
    )
}else{
    return null
}
}

export default Bolillero
