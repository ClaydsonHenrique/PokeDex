import React from 'react'


export default function Cards({ pokemon }) {

  const [dataPokemon, setDataPokemon] = React.useState({})
  const [imgPokemon, setImgPokemon] = React.useState('')

  const getPokemonDetail = async () => {

    const response = await fetch(pokemon.url)
    const data = await response.json()

    setDataPokemon(data)
    setImgPokemon(data.sprites.back_default)
  }

  React.useEffect(() => {
    getPokemonDetail()
  }, [])

  console.log(dataPokemon, 'verifdicando data pokemon')

  return (
    <div>
      <h1>Cards</h1>
      <div>
        <h2>#{String(dataPokemon.id).padStart(3, '0')}</h2>
        <h2>{pokemon.name}</h2>
        <img src={imgPokemon} alt={pokemon.name} />
        {dataPokemon.types.length > 0 &&
        dataPokemon.types.map((type) => (
          <p>{type.type.name}</p>
        ))}
      </div>
    </div>
  )
}
