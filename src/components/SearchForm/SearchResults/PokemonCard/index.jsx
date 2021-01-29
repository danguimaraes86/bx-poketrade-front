import axios from 'axios'
import { useState } from 'react'

export default function PokemonCard({ pokemon, pokemonList01, setPokemonList01, pokemonList02, setPokemonList02 }) {

  const [pokemonDetails, setPokemonDetails] = useState({})

  const url = 'https://pokeapi.co/api/v2/pokemon'
  async function getPokemonDetails(pokemon) {
    const { data } = await axios.get(`${url}/${pokemon}`)
    setPokemonDetails({
      api_id: data.id,
      name: data.name,
      sprite_url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      base_experience: data.base_experience
    })
  }
  getPokemonDetails(pokemon)

  function handleAddPokemon01(pokemon) {
    let pokemonList = [...pokemonList01, pokemon]
    setPokemonList01(pokemonList);
  }

  function handleAddPokemon02(pokemon) {
    let pokemonList = [...pokemonList02, pokemon]
    setPokemonList02(pokemonList);
  }

  return (
    <div className='col-12 col-md-4 my-2 mb-md-0'>
      <div className='card p-2'>
        <img src={pokemonDetails.sprite_url} className="card-img-top" alt="..." />
        <div>
          <h5 className="card-title text-capitalize text-center">{pokemonDetails.name}</h5>
          <div className='d-flex justify-content-around'>
            <button
              className="btn btn-dark text-warning"
              onClick={() => handleAddPokemon01(pokemonDetails)}
            >
              Add<br />
              {'trainer_01'}
            </button>
            <button
              className="btn btn-dark text-warning"
              onClick={() => handleAddPokemon02(pokemonDetails)}
              >
              Add<br />
              {'trainer_02'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}