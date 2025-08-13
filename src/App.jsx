import { useEffect, useState } from 'react'

import { getPokemons } from './services/fetchApi'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import FilterPoke from './components/FilterPoke'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [limite, setlimite] = useState(20)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)
  const [pokemonSelected, setPokemonSeletected] = useState(0)
  const [selected, setSelected] = useState(false)
  const [filter, setFilter] = useState([])

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
    document.body.style.overflow = 'hidden';
  }

  const onclose = () => {
    setSelected(false)
    document.body.style.overflow = '';
  }
  
  useEffect(() => {
    fetchPokemons()
  }, [limite, filter])


  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 px-20 ">
      <Header />
      <FilterPoke filter={filter} setFilter={setFilter} />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 '>
        {
          filter.length > 0 &&
          filter.map((card,index) => (
            <button onClick={() => selectedPokemon(index)}>
            <Cards pokemon={card.pokemon} />
            </button>
          ))
        }


        {pokemons.length > 0 && filter.length === 0 &&
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

      <Footer />
      {selected &&
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          {pokemons.length > 0 &&
            <div className='flex flex-col gap-4'>
              <button className='w-20  p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors'
                onClick={onclose }
              >fechar </button>
              <Cards pokemon={pokemons[pokemonSelected]} />
            </div>}
        </div>}



    </section>
  )
}

export default App
