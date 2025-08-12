import { useEffect, useState } from 'react'

import { getPokemons } from './services/fetchApi'
import Cards from './components/Cards'

function App() {
  const [pokemons, setPokemons] = useState([])
  
  
  const fetchPokemons = async () => {
    const allPokemons = await getPokemons()

    setPokemons(allPokemons.results)

  }

  useEffect(() => {
    fetchPokemons()
  },[])


  return (
    <>
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => (
          <Cards pokemon={pokemon} />
        ))
      }
    </>
  )
}

export default App
