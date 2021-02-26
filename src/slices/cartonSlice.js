import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState_Juego = {
            status:'idle',
            init:false,
            automatico:false,
  };
  export const crearCartonSync = createAsyncThunk(
      'juego/crearCartonSync', 
  async (payload) => {
    const {carton,player} = payload;
    const crear =()=>{
        let obj = {
            
                    nombre:'',
                    carton,
                    linea1:[],
                    linea2:[],
                    linea3:[],
                
        }
        
        for (let i = 0; i <carton.length; i++) {
                
                obj.linea1.push(carton[i][0]) ;
                obj.linea2.push(carton[i][1]) ;
                obj.linea3.push(carton[i][2]) ;
               
            
        }
        return obj
    }
    let resp = await crear()
    return {carton : resp,jugador:player};
  });
  
  const Juego = createSlice({
    name: 'juego',
    initialState: initialState_Juego,
    reducers: {

       
          crearJugador: (state, { payload }) => {
            let keys = Object.keys(payload)
            keys.map(e => {
                let obj ={
                    nombre:payload[e],
                    carton:[],
                    linea1:[],
                    linea2:[],
                    linea3:[],
                }
            state[e] = obj
            })
            state.status = 'exitoso'
          },
          linea:(state,{payload})=>{
            state[payload].linea = 'FELICIDADES HICISTE UNA LINEA!!'
          },
          cartonLleno:(state,{payload})=>{
            state[payload].cartonLleno = 'FELICIDADES GANASTE EL JUEGO!!'
          },
          eliminarJugador:(state,{payload})=>{
            delete state[payload]
          },    
          iniciarJuego:(state,{payload})=>{

            state.init = true
          },
          finalizarJuego:(state,{payload})=>{
            state.init = false
            let keys = Object.keys(state);
            keys.map (e => {
              if(e === 'init' || e === 'automatico' || e === 'status'){
                state.init = false
              }else{
                delete state[e]
              }
            })
          },
          automatico:(state,{payload})=>{
            state.automatico = !state.automatico;
          },
          tachar: (state, {payload})=>{

            const{jugador,num} = payload;
                state[jugador].linea1 = state[jugador].linea1.filter(e => e !== num)
                state[jugador].linea2 = state[jugador].linea2.filter(e => e !== num)
                state[jugador].linea3 = state[jugador].linea3.filter(e => e !== num)

          },

    },
    extraReducers: {
          [crearCartonSync.pending]: (state, action) => {
            state.status = 'pendiente';
          },
          [crearCartonSync.fulfilled]: (state, {payload}) => {
              const{carton,jugador} = payload;
              state[jugador].carton = carton.carton;
              state[jugador].linea1 = carton.linea1;
              state[jugador].linea2 = carton.linea2;
              state[jugador].linea3 = carton.linea3;

            state.status = 'exitoso';
          },
          [crearCartonSync.rejected]: (state, action) => {
            state.status = 'rechazado';
      
          },
    }
})
 export const {automatico, tachar, crearJugador,crearCarton, eliminarJugador,iniciarJuego, finalizarJuego, linea, cartonLleno} = Juego.actions
export default Juego