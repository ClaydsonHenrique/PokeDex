import React from 'react'
import { typeColors , typeColorsOpacity} from '../services/typesColors'
import { typeIcons } from '../services/iconsImages'


export default function Cards({ pokemon }) {

  const [dataPokemon, setDataPokemon] = React.useState({})
  const [imgPokemon, setImgPokemon] = React.useState('')
  const [typePokemon, setTypePokemon] = React.useState([])


  const getPokemonDetail = async () => {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    setDataPokemon(data);
    setImgPokemon(data.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default);

    if (data.types) {
      const pokemontype = data.types.map(type => type.type.name);
      setTypePokemon(pokemontype);
    }
  }

  React.useEffect(() => {
    getPokemonDetail()
  }, [])

 
  console.log(dataPokemon)
  return (
    <section
    style={{backgroundColor:typeColorsOpacity[typePokemon[0]]}}
    className=' relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group '>
      <div className='max-w-sm rounded shadow-lg flex flex-col'>
        <div className='flex gap-5 justify-around items-center my-1'>
          <div>
            <img
              className='size-8 p-2 rounded-full'
              style={{ backgroundColor: typeColors[typePokemon[0]] }}
              src={typeIcons[typePokemon[0]]} alt="" />
          </div>
          <h2 className='text-lg font-bold text-gray-800 capitalize ' >{pokemon.name}</h2>
          <h2 className='bg-white bg-opacity-90 rounded-full px-2 py-1 text-xs font-semibold text-gray-600 justify-self-end self-center' >#{String(dataPokemon.id).padStart(3, '0')}</h2>

        </div>
        <div
          className='w-full p-10'
          style={{
            backgroundColor: typeColors[typePokemon[0]]
          }}
        >
          <img src={imgPokemon} alt={pokemon.name} />
        </div>

        <div className='p-4 flex gap-1 justify-around'>
          {typePokemon.length > 0 &&
            typePokemon.map((type) => (
              <div
                className='h-10 gap-1 flex items-center justify-around  px-2 py-1 rounded-xl '
                style={{ backgroundColor: typeColors[type] }}
                >
                <img
                  className='size-4'
                  style={{ backgroundColor: typeColors[type] }}
                  src={typeIcons[type]} alt="" />
                <p className='rounded-full text-sm font-medium text-white' style={{
                  backgroundColor: typeColors[type]
                }}>
                  {type}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
