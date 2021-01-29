import { useState } from 'react'
import pokemonNames from '../../../db/PokemonNames'

export default function SearchInput({ setSearchResults }) {

  const [ searchValue, setSearchValue ] = useState('')
  const isSearchOK = (searchValue.length > 2) ? true : false

  function handleSearch(value) {
    let searchResults = []
    pokemonNames.forEach((pokemon) => {
      if (pokemon.includes(value)) {
        searchResults.push(pokemon)
      }
    })
    setSearchResults(searchResults)
  }

  return (
    <div className='row'>
      <div className='col-10'>
        <div className="form-floating">
          <input
            type="text"
            className='form-control'
            id="searchPokemonForm"
            placeholder='pokemon'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <label htmlFor="searchPokemonForm">Pokemon</label>
        </div>
      </div>

      <div className='col-2'>
        <button
          className='card h-100 w-100 bg-dark'
          disabled={!isSearchOK} style={isSearchOK ? {} : { cursor: 'not-allowed' }}
          onClick={() => handleSearch(searchValue)}
        >
          <span className={`my-auto mx-auto ${isSearchOK ? 'text-warning' : 'text-white'}`}>
            <i className="bi bi-search fs-3" />
          </span>
        </button>
      </div>
      <div id="searchHelp" className="form-text">A busca deve conter no mínimo 3 caracteres.</div>

    </div>
  )
}