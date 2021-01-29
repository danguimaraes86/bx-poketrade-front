import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import TrainersWrapper from '../components/Layout/TrainersWrapper'
import TrainerCard from '../components/TrainerCard'

export default function Home() {

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
    </Layout >
  )
}
