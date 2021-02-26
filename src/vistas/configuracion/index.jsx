import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonIngresar, SelectConfig } from '../../componentes/styles'
import { crearJugador, finalizarJuego } from '../../slices/cartonSlice'
import { automaticoSelector } from '../../utils/selector'
function Configuracion() {
    const jugadores = useRef(null)
    const [opcion,setOpcion] = useState(0)
    const [initialValues, setInitialValues] = useState({})
    const auto = useSelector(automaticoSelector);
    const dispatch = useDispatch()
    function handleOnchange (e){
            setInitialValues({
                ...initialValues,
                [e.target.name]: e.target.value,
            })
    }
    function inputNombres(value){
        let arr = []
        for (let i = 0; i < value *1; i++) {
            arr.push(i)
        }

        return (
            arr.map((e,i)=>{
                return (
                    <input type='text' key={i}  name={`jugador${i +1}`} style={{marginBottom:'4px', textAlign:'center', borderRadius:'10px',padding:'4px'}}
                    onChange={handleOnchange} placeholder={`jugador${i+1}`}></input>
                )
            })
        )
    }
    function handleOptions(e){
        setOpcion(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(crearJugador(initialValues))
    }

        return(<>
        <h3>Selecciona cuantos jugadores</h3>
            <SelectConfig  name="jugadores" onChange={handleOptions} id="jugadores">
            <option value="0" > seleccionar numero de jugadores </option>        
                <option value="1"> solitario</option>
                <option value="2">2 jugadores</option>
                <option value="3">3 jugadores</option>
                <option value="4">4 jugadores</option>
        </SelectConfig>
        <Link to='/'>
        <ButtonIngresar onClick={ ()=>dispatch(finalizarJuego())}> Volver</ButtonIngresar>
        </Link>
     
            {opcion * 1 ?   
              <form onSubmit={handleSubmit}>
                  <div style={{display:'flex', flexDirection:'column', width:'50%', margin:'10% auto',marginBottom: 'inherit', justifyContent:'center'}}>

                  <h3>Ingresa los nombres de los jugadores</h3>
              {inputNombres(opcion)}
              <ButtonIngresar  type='submit' > Agregar</ButtonIngresar>
                  </div>
              </form>
            :null
            }
        </>
        )

}

export default Configuracion
