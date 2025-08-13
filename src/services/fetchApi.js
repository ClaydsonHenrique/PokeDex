const url = 'https://pokeapi.co/api/v2/'

const getPokemons = async (limite, offset) => {

  const response = await fetch(`${url}pokemon?limit=${limite}&offset=${offset}`)
  const data = await response.json();

  return data

}


const getPokemonId = async (id) => {
  const response = await fetch(`${url}pokemon/${id}`)
  const data = await response.json();
  return data
}


const getTypePokemons = async () => {
  const response = await fetch(`${url}type`);
  const data = await response.json();
  const filters = data.results
  return filters;
}

const getPokemonsForType = async (type) => {
  const pokemon = []
  type.map(async (t) => {
    const response = await fetch(`${url}type/${t}`)
    const data = await response.json();
    pokemon.push(...data.pokemon)
  })
  return pokemon
}






export { getPokemons, getPokemonId, getTypePokemons, getPokemonsForType }