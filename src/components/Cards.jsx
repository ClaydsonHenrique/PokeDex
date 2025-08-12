import React from 'react'


export default function Cards({ pokemon }) {

  const [dataPokemon, setDataPokemon] = React.useState({})
  const [imgPokemon, setImgPokemon] = React.useState('')
  const [typePokemon, setTypePokemon] = React.useState([])

  const typeColors = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
  };


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
    <section className='border rounded-lg hover:scale-110 transition duration-300'>
      <div className='max-w-sm rounded shadow-lg flex flex-col '>
        <div className='flex gap-5 justify-end'>
          <h2>{pokemon.name}</h2>
          <h2>#{String(dataPokemon.id).padStart(3, '0')}</h2>

        </div>
        <div 
          className='w-full p-10'
        style={{
          backgroundColor: typeColors[typePokemon[0]]
        }}
        >
          <img src={imgPokemon} alt={pokemon.name} />
        </div>
        
        <div className='flex'>
          {typePokemon.length > 0 &&
            typePokemon.map((type) => (
              <p className='rounded-lg px-4 py-1' style={{
                backgroundColor: typeColors[type]
              }}>{type}</p>
            ))}
        </div>
      </div>
   </section>
  )
}
