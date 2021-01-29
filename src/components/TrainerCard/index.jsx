import TrainerInput from './TrainerInput'
import PokemonTable from './PokemonTable'

export default function TrainerCard({ setTrainer, pokemonList }) {

  return (
    <div className='col-6'>
      <TrainerInput setTrainer={setTrainer} />
      <PokemonTable pokemonList={pokemonList} />
    </div>
  )
}