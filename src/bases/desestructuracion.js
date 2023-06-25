//desestructuracion
const persona = {
    nombre: 'Carlos',
    apellido: 'Roberto'
}

const {nombre, apellido} = persona

console.log( nombre, apellido)

//desetructuracion directo en una funcion
const miFuncion = ({nombre, apellido}) =>{
    console.log(nombre, apellido)
}


//desestructurar un objeto que tiene otro objeto
const persona2 = {
    nombre: 'Roy',
    apellido: 'Blanco',
    edad: 25,
    direccion:{
        casa:83,
        zona:1,
        colonia: 'Mariscal'
    }
}

miFuncion(persona)

const {nombre:nuevonombre, apellido:nuevoapellido, direccion:{casa, zona,colonia}} = persona2

console.log(nuevonombre, nuevoapellido,casa, zona, colonia)