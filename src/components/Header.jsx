import React from 'react'

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
        PokéDex
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Discover and explore the world of Pokémon
      </p>
    </div>
  )
}
