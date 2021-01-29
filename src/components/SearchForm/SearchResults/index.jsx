import PokemonCard from './PokemonCard'

export default function SearchResults({ searchResults }) {

  return (
    <div className='row'>
      {searchResults.map((pokemon, key) => {
        return (
          <PokemonCard key={key} pokemon={pokemon} />
        )
      })}
    </div>
  )
}