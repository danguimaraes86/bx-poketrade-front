import TrainerNickname from './TrainerNickname'
import TrainerInput from './TrainerInput'
import PokemonTable from './PokemonTable'

export default function TrainerCard({ setTrainer, trainer, pokemonList, viewPage }) {

  function handlePageView(page) {
    if(page === 'home'){
      return(
        <TrainerInput setTrainer={setTrainer} />
      )
    } else {
      return (
        <TrainerNickname nickname={trainer} />
      )
    }
  }

  return (
    <div className='col-6'>
      { handlePageView(viewPage) }
      <PokemonTable pokemonList={pokemonList} />
    </div>
  )
}