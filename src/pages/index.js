import { useState } from 'react'

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
  const [pokemonList01, setPokemonList01] = useState([])
  const [pokemonList02, setPokemonList02] = useState([])

  let isFairTrade = false

  return (
    <Layout>

      <NavBar />
      <TrainersWrapper>
        <TrainerCard pokemonList={pokemonList01} />
        <TrainerCard pokemonList={pokemonList02} />
      </TrainersWrapper>

      <TradeButton isFairTrade={isFairTrade} />

      <SearchWrapper>
        <SearchInput setSearchResults={setSearchResults} />
        <SearchResults
          searchResults={searchResults}
          pokemonList01={pokemonList01}
          setPokemonList01={setPokemonList01}
          pokemonList02={pokemonList02}
          setPokemonList02={setPokemonList02}
        />
      </SearchWrapper>

    </Layout >
  )
}
