export default function PokemonTable({ pokemonList }){

  function handlePokemonList(pokemonList) {
    if (pokemonList.length === 0) {
      return (
        <tr>
          <th scope='row' colSpan='3' className='text-center'>Nenhum Pokemon</th>
        </tr>
      )
    } else {
      return (pokemonList.map((pokemon, key) => {
        return (
          <tr key={key}>
            <th scope='row' className='align-middle text-capitalize'>{pokemon.name}</th>
            <td><img src={pokemon.sprite_url} height='32' width='32' /></td>
            <td className='text-center align-middle'>{pokemon.base_experience}</td>
          </tr>
        )
      }))
    }
  }

  return (
    <table className='table table-striped m-0'>
        <thead>
          <tr>
            <th scope='col'>Nome</th>
            <th scope='col'>{''}</th>
            <th scope='col' className='text-center'>Power</th>
          </tr>
        </thead>
        <tbody>
          {handlePokemonList(pokemonList)}
        </tbody>
      </table>
  )
}