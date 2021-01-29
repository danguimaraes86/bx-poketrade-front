import TrainerInput from './TrainerInput'
import PokemonTable from './PokemonTable'

export default function TrainerCard({ nickPlaceholder, pokemonList }) {

  return (
    <div className='col-6'>
      <TrainerInput nickPlaceholder={nickPlaceholder} />
      <PokemonTable pokemonList={pokemonList} />
    </div>
  )
}