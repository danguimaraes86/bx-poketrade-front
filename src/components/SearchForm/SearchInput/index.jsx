export default function SearchInput() {

  let isSearchOK = false

  return (
    <div className='row'>
      <div className='col-10'>
        <div className="form-floating">
          <input type="text" list="datalistOptions" className="form-control" id="searchPokemonForm" placeholder='pokemon' />
          <label htmlFor="searchPokemonForm">Pokemon Name</label>
        </div>
      </div>

      <div className='col-2'>
        <button className='card h-100 w-100 bg-dark' disabled={!isSearchOK} style={isSearchOK ? {} : { cursor: 'not-allowed' }}>
          <i className={`fas fa-search fs-3 my-auto mx-auto ${isSearchOK ? 'text-warning' : 'text-white'}`} aria-hidden />
        </button>
      </div>
    </div>
  )
}