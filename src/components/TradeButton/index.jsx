import { useState, useEffect } from 'react'

import FairTradeButton from './FairTradeButton'
import NotFairTradeButton from './NotFairTradeButton'

export default function TradeButton({ onSubmitTrade, resetTrade, pokemonList01, pokemonList02 }) {

  const [isFair, setIsFair] = useState(false)

  useEffect(() => {
    let totalPower01 = 0
    pokemonList01.forEach(pokemon => {
      totalPower01 += pokemon.base_experience
    })

    let totalPower02 = 0
    pokemonList02.forEach(pokemon => {
      totalPower02 += pokemon.base_experience
    })

    if ((totalPower01 / totalPower02) <= 1.25 && (totalPower01 / totalPower02) >= 0.75) {
      setIsFair(true)
    } else {
      setIsFair(false)
    }
  }, [pokemonList01, pokemonList02])

  function handleTradeButton(fair) {
    if (fair) {
      return <FairTradeButton />
    } else {
      return <NotFairTradeButton />
    }
  }

  return (
    <div className='container my-2 p-2'>
      <div className='d-flex justify-content-center' onClick={onSubmitTrade}>
        {handleTradeButton(isFair)}
        <button className='btn btn-outline-dark ms-2' onClick={resetTrade}>
          Limpar
        </button>
      </div>
    </div>
  )
}