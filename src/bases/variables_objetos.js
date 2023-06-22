//variables
const nombre = 'Carlos'
const apellido = 'Roberto'
//template string

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)

//objetos
const persona = {
    nombre: 'Carlos',
    apellido: 'Roberto',
    edad: 23,
    direccion: {
        casa: 3,
        ciudad: 'Sevilla',
        pais: 'Spanin'
    }
};

const persona2 = {...persona}

persona2.nombre = 'Charlie'

//console.log( persona )
//console.log( persona2 )
