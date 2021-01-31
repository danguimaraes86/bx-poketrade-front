import { useEffect, useState } from 'react'
import axios from '../lib/axiosRequest'

import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TrainersWrapper from '../components/Layout/TrainersWrapper'
import TrainerCard from '../components/TrainerCard'

export default function LastTrades({ tradeHistory }) {

  function handleTradeHistory(history) {
    return (
      history.map((trade, key) => {
        const pokemon_list01 = trade.trainers[0].pokemons
        const trainer01 = trade.trainers[0].nickname
        const pokemon_list02 = trade.trainers[1].pokemons
        const trainer02 = trade.trainers[1].nickname

        return (
          <TrainersWrapper key={key}>
            <TrainerCard pokemonList={pokemon_list01} trainer={trainer01} viewPage={'history'} />
            <TrainerCard pokemonList={pokemon_list02} trainer={trainer02} viewPage={'history'} />
          </TrainersWrapper>
        )
      })
    )
  }


  return (
    <Layout>
      <NavBar />

      { handleTradeHistory(tradeHistory)}

    </Layout >
  )
}

export async function getServerSideProps(context) {
  const baseURL = 'https://bx-poketrade-back.herokuapp.com/'
  const { data } = await axios('/pokemontrade', baseURL, 'GET')
  return {
    props: {
      tradeHistory: data.pokemontrades
    }
  }
}
