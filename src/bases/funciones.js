const arreglo = [1,2,3,4]

console.log(arreglo)

let arreglo2 = [...arreglo,5,6]

const arreglo3 = arreglo2.map( (numero) => numero * 3 );
console.log(arreglo2)
console.log(arreglo3)

const saludar = (nombre) => `Hola ${nombre}`
const getUser = (nombre) =>({
    nombre: nombre,
    apellido: 'Roberto'
})

console.log(saludar('Roy'))
console.log(getUser('Roger'))