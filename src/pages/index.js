import { useState } from 'react'
import axios from '../lib/axiosRequest'

import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TrainersWrapper from '../components/Layout/TrainersWrapper'
import TrainerCard from '../components/TrainerCard'
import SearchWrapper from '../components/Layout/SearchWrapper'
import SearchInput from '../components/SearchForm/SearchInput'
import SearchResults from '../components/SearchForm/SearchResults'
import TradeButton from '../components/TradeButton'

export default function Home() {

  const [searchResults, setSearchResults] = useState([])
  const [trainer01, setTrainer01] = useState('')
  const [trainer02, setTrainer02] = useState('')
  const [pokemonList01, setPokemonList01] = useState([])
  const [pokemonList02, setPokemonList02] = useState([])

  function resetTrade() {
    setSearchResults([])
    setPokemonList01([])
    setPokemonList02([])
  }

  async function handleSubmitTrade() {
    const baseURL = 'https://bx-poketrade-back.herokuapp.com/'
    const payload = {
      pokemontrade: {
        trainer01: trainer01,
        trainer02: trainer02,
        pokemon_list01: pokemonList01,
        pokemon_list02: pokemonList02
      }
    }
    const response = await axios('/pokemontrade', baseURL, 'POST', payload )
    console.log(response);
  }

  return (
    <Layout>

      <NavBar />
      <TrainersWrapper>
        <TrainerCard pokemonList={pokemonList01} setTrainer={setTrainer01} />
        <TrainerCard pokemonList={pokemonList02} setTrainer={setTrainer02} />
      </TrainersWrapper>

      <TradeButton
        onSubmitTrade={handleSubmitTrade}
        pokemonList01={pokemonList01}
        pokemonList02={pokemonList02}
        resetTrade={resetTrade}
      />

      <SearchWrapper>
        <SearchInput setSearchResults={setSearchResults} />
        <SearchResults
          searchResults={searchResults}
          pokemonList01={pokemonList01}
          setPokemonList01={setPokemonList01}
          pokemonList02={pokemonList02}
          setPokemonList02={setPokemonList02}
          trainer01={trainer01}
          trainer02={trainer02}
        />
      </SearchWrapper>

    </Layout >
  )
}
