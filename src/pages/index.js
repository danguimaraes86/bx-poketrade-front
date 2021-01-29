import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TrainersWrapper from '../components/Layout/TrainersWrapper'
import TrainerCard from '../components/TrainerCard'

import pokemonNames from '../db/PokemonNames'

export default function Home() {

  const searchValue = 'nido'
  const searchResults = []

  function handleSearchName(value) {
    pokemonNames.forEach((pokemon) => {
      if (pokemon.includes(value)) {
        searchResults.push(pokemon)
      }
    })
    return (
      searchResults.map((pokemon, key) => {
        return (
          <div key={key} className='col-12 col-md-4 my-2 mb-md-0'>
            <div className='card p-2'>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" className="card-img-top" alt="..." />
              <div>
                <h5 className="card-title text-capitalize text-center">{pokemon}</h5>
                <div className='d-flex justify-content-between'>
                  <a href="#" className="btn btn-dark text-warning">
                    Add
                    <br />
                    {'trainer_01'}
                  </a>
                  <a href="#" className="btn btn-dark text-warning">
                    Add
                    <br />
                    {'trainer_02'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  const pokemonList01 = [{
    api_id: 1,
    name: 'bulbasaur',
    sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    base_experience: 64
  }, {
    api_id: 11,
    name: 'metapod',
    sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
    base_experience: 72
  }]

  const pokemonList02 = [{
    api_id: 1,
    name: 'nidoqueen',
    sprite_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
    base_experience: 227
  }]

  return (
    <Layout>
      <NavBar />
      <TrainersWrapper>
        <TrainerCard nickPlaceholder={'Trainer 1'} pokemonList={pokemonList01} />
        <TrainerCard nickPlaceholder={'Trainer 2'} pokemonList={pokemonList02} />
      </TrainersWrapper>

      <div className='container card my-2 p-2'>

        <div className='row'>
          <div className='col-10'>
            <div className="form-floating">
              <input type="text" list="datalistOptions" className="form-control" id="searchPokemonForm" placeholder='pokemon' />
              <label htmlFor="searchPokemonForm">Pokemon Name</label>
            </div>
          </div>

          <div className='col-2'>
            <div className='btn card h-100 bg-dark'>
              <i className="fas fa-search text-warning text-center my-auto fs-3" aria-hidden />
            </div>
          </div>
        </div>

        <div className='row'>
          {handleSearchName(searchValue)}
        </div>

      </div>

    </Layout >
  )
}
