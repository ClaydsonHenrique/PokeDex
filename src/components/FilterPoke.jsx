import React from 'react'
import { getPokemonsForType, getTypePokemons } from '../services/fetchApi'
import { typeColors, typeColorsOpacity } from '../services/typesColors'

export default function FilterPoke({ setFilter, setLoadingCard }) {

  const [types, settypes] = React.useState([])
  const [typefilter, setTypeFilters] = React.useState([])

  
  
  React.useEffect(() => {
    const fetchData = async () => {
      const a = await getPokemonsForType(typefilter);
      setFilter(a)
      console.log(a, 'verificando a')
    };
    fetchData();
  }, [typefilter]);

  
  React.useEffect(() => {
    const fetchData = async () => {
      let b = await getTypePokemons();
      settypes(b)
    };
    fetchData();
  }, []);

  const handleChange = ({ target }) => {
    setLoadingCard(true)
    if (typefilter.includes(target.value)) {
      const removeType = typefilter.filter(item => item !== target.value)
      setTypeFilters(removeType)
    } else {
      setTypeFilters((prev) => [
        target.value,
        ...prev
      ])
    }
    
    setTimeout(() => {
      setLoadingCard(false)
    },2000)
  }

  console.log(typefilter)

  

  return (
    <section>

      <form action="submit" 
        className='my-9 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9  '
      >
        {
          types.map((type) =>
            type.name !== 'stellar' && type.name !== 'unknown' && (
              <label
                key={type.name}
                htmlFor={type.name}
                style={{
                  backgroundColor: typeColors[type.name] || 'rgba(168, 168, 120)',
                  position: 'relative'
                }}
                className='cursor-pointer m-1 rounded-lg px-3 py-1 text-white  text-xl flex justify-between items-center'
              >
                {type.name}
                <input
                  type="checkbox"
                  value={type.name}
                  onChange={handleChange}
                  style={{ accentColor: typeColorsOpacity[type.name] }}
                  id={type.name}
                  className=' cursor-pointer checked:outline text-sm font-sans font-medium size-5 '
                />
              </label>
            )
          )
        }
      </form>


    </section>
  )
}
