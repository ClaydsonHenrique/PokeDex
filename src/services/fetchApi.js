const url = 'https://pokeapi.co/api/v2/'

const getPokemons = async () => {
  const limite = 20
  const offset = 0

  const response = await fetch(`${url}pokemon?limit=${limite}&offset=${offset}`)
  const data = await response.json();

  return data

}


const getPokemonId = async (id) => {
  const response = await fetch(`${url}pokemon/${id}`)
  const data = await response.json();
  return data
}



export  { getPokemons, getPokemonId }