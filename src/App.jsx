import {  useEffect, useState } from 'react'

import { getPokemons } from './services/fetchApi'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [limite, setlimite] = useState(20)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemonSelected , setPokemonSeletected] = useState(0)
  const [selected, setSelected] = useState(false)

  const fetchPokemons = async () => {
    const allPokemons = await getPokemons(limite, offset)

    setPokemons(allPokemons.results)

  }
  
  const handleClick = () => {
    setLoading(!loading)
    setTimeout(() => {
      setlimite(limite + 20)
      setLoading(false)
    }, 1000)
    
  }
  
  
  const selectedPokemon = (index) => {
    setPokemonSeletected(index)
    setSelected(true)
  }

  useEffect(() => {
    fetchPokemons()
  }, [limite])


  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 ">
      <Header />
      <div className='grid grid-cols-4 gap-8  '>
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            <button onClick={() => selectedPokemon(index)}>
              <Cards pokemon={pokemon} />
            </button>
          ))
        }
      </div>

      <button
        className="w-50  mt-5 px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        onClick={handleClick}
      >{loading ? '...carregando' : 'adicionar mais'}</button>
      
      <Footer/>
      {selected &&
        <div className="w-100 h-140 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <button className='absolute top-4 right-4 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors'
          onClick={() => setSelected(false)}
        >fechar </button>
        {pokemons.length > 0 &&
          <Cards pokemon={pokemons[pokemonSelected]} />}
      </div>}
      
      
      
    </section>
  )
}

export default App
