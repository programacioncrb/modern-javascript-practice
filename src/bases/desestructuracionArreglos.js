//desestructuracion de arreglos

const personajes =  ['goku', 'begeta','krillin']

const [p1] = personajes
console.log(p1)

//segun su posicion en su posicion
const[, , p3] = personajes
console.log(p3)

//devolver una funcion dentro del arreglo
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log(nombre)
setNombre();

