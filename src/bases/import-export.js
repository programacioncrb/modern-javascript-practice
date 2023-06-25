import { heroes } from './data/heroes';

const getHeroeById = (id) => {
    return heroes.find( (heroe)=>heroe.id === id )
}

//console.log(getHeroeById(5))

const getHeroeByOwner = ( owner) => {
    return heroes.filter( (heroe)=>heroe.owner === owner )
}

console.log(getHeroeByOwner( 'Marvel'))


const paises = [
    {
        id: 1, 
        nombre: 'Guatemala',
        extencion: 108835
    },
    {
        id: 2, 
        nombre: 'Espana',
        extencion: 2939838
    },
    {
        id: 3, 
        nombre: 'Ecuador',
        extencion: 108835
    }
    ]

    const getPaisById = (id) => {
        return paises.find( (pais)=>pais.id === id )
    }
    
   // console.log(getPaisById(3))
