export  const createValues = (num)=>{
    let array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
        
    }
    return array
}

export const createCarton = ()=>{
    let carton = [[],[],[],[],[],[],[],[],[]]

    
    for (let i = 0; i < carton.length; i++) {
        let e = 0
        while(carton[i].length < 3){
              let c1 = Math.floor(Math.random() * (10 - 1)) + 1
              let c2 = Math.floor(Math.random() * (20 - 10)) + 10
              let c3 = Math.floor(Math.random() * (30 - 20)) + 20
              let c4 = Math.floor(Math.random() * (40 - 30)) + 30
              let c5 = Math.floor(Math.random() * (50 - 40)) + 40
              let c6 = Math.floor(Math.random() * (60 - 50)) + 50
              let c7 = Math.floor(Math.random() * (70 - 60)) + 60
              let c8 = Math.floor(Math.random() * (80 - 70)) + 70
              let c9 = Math.floor(Math.random() * (91 - 80)) + 80
              let index = c1
            if(i === 1) index = c2 
            if(i === 2) index = c3 
            if(i === 3) index = c4 
            if(i === 4) index = c5 
            if(i === 5) index = c6 
            if(i === 6) index = c7 
            if(i === 7) index = c8 
            if(i === 8) index = c9 

              if(!Boolean(carton[i].find(e => e === index)))  carton[i].push(index)
                e++
                if(carton[i].length === 3)carton[i].sort((a,b)=> a-b)
          }
    }
return carton
}

export const createSpace = (array)=>{

let fila = [0,1,2,3,4,5,6,7,8]
let s = []
for (let j = 0; j < fila.length; j++) {
    let columna = [0,1,2]
    columna.sort(()=> Math.random() - 0.5)
    let espacio = columna.pop()
    let espacio2= columna.pop()
    if(s.filter(e => e === espacio).length !== 4){
        array[j][espacio] = ' '
        s.push(espacio)
    }else if(s.filter(e => e === espacio2).length !==4){
        array[j][espacio2] = ' '
        s.push(espacio2)
    }else{
        array[j][columna[0]] = ' '
        s.push(columna[0])
    }
}
let fila1 =[]
let fila2 =[]
let fila3 =[]

for (let i = 0; i < array.length; i++) {
    fila1.push(array[i][0])
    fila2.push(array[i][1])
    fila3.push(array[i][2])   
}
let cantidad =0;
while (cantidad <10) {
    let columna = [0,1,2]
    columna.sort(()=> Math.random() - 0.5)
    fila.sort(()=> Math.random() - 0.5)
    if(fila1.filter(e =>  typeof e === 'string').length !== 4){
        
        let c = columna.pop()
        let f = fila.pop()
        if(fila2[cantidad] !== ' ' && fila3[cantidad] !== ' ' && fila1[cantidad] !== ' ')  fila1[cantidad] = ' ';
        else
        if( fila3[cantidad] !== ' ' && fila2[cantidad] === ' ' && fila1[cantidad] !== ' ')  fila1[cantidad] = ' ';
        else
        if(fila2[cantidad] !== ' ' && fila3[cantidad] === ' '  && fila1[cantidad] !== ' ')  fila1[cantidad] = ' ';

        
    }else if(fila2.filter(e => typeof e === 'string').length !== 4){
        let c = columna.pop()
        let cantidad = fila.pop()
        if(fila2[cantidad] !== ' ' && fila3[cantidad] !== ' ' && fila1[cantidad] !== ' ')  fila2[cantidad] = ' ';
        else
        if( fila3[cantidad] !== ' '  && fila1[cantidad] === ' '  && fila2[cantidad] !== ' ')  fila2[cantidad] = ' ';
        else
        if( fila3[cantidad] === ' ' && fila1[cantidad] !== ' '  && fila2[cantidad] !== ' ')  fila2[cantidad] = ' ';
    }else if(fila3.filter(e => typeof e === 'string').length !== 4){
        let c = columna.pop()
        let cantidad = fila.pop()
        if(fila2[cantidad] !== ' ' && fila3[cantidad] !== ' ' && fila1[cantidad] !== ' ')  fila3[cantidad] = ' ';
        else
        if( fila3[cantidad] !== ' '  && fila2[cantidad] === ' ' && fila1[cantidad] !== ' ')  fila3[cantidad] = ' ';
        else
        if(fila2[cantidad] !== ' '  && fila1[cantidad] === ' '  && fila3[cantidad] === ' ')  fila3[cantidad] = ' ';

    }
    cantidad++
}

for (let i = 0; i < array.length; i++) {
    array[i][0] = fila1[i]
    array[i][1] = fila2[i]
    array[i][2] = fila3[i]    
}

return array
}

export const searchNum = (carton, num)=>{
let index;
if(carton && num ){
    carton.map((linea, indice) => {
        linea.map((columna,i)=>{
                if(num === columna) index =  i+ '' + indice 
        })
    
    })
}
return index ? index : false
}