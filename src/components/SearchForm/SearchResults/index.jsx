import { useEffect } from 'react'
import PokemonCard from './PokemonCard'

export default function SearchResults({ searchResults, ...props }) {

  return (
    <div className='row'>
      {searchResults.map((pokemon, key) => {
        return (
          <PokemonCard key={key} pokemon={pokemon} {...props} />
        )
      })}
    </div>
  )
}