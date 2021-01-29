export default function SearchInput() {

  let isSearchOK = true

  return (
    <div className='row'>
      <div className='col-10'>
        <div className="form-floating">
          <input type="text" className="form-control" id="searchPokemonForm" placeholder='pokemon' />
          <label htmlFor="searchPokemonForm">Pokemon</label>
        </div>
      </div>

      <div className='col-2'>
        <button className='card h-100 w-100 bg-dark' disabled={!isSearchOK} style={isSearchOK ? {} : { cursor: 'not-allowed' }}>
          <span className={`my-auto mx-auto ${isSearchOK ? 'text-warning' : 'text-white'}`}>
            <i className="bi bi-search fs-3" />
          </span>
        </button>
      </div>
    </div>
  )
}