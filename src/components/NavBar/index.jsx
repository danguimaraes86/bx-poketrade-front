
export default function NavBar() {
  return (
      <nav className='navbar navbar-dark bg-dark border-bottom border-warning'>
        <div className='container'>
          <div className='d-flex navbar-brand'>
            <img src='/pokeapi_256.png' width='60' height='48' className='navbar-brand' />
            <div className='align-self-center text-warning'>
              PokeTrade
            </div>
          </div>
          <div>
            <i className="fas fa-history text-warning text-center my-auto fs-3" aria-hidden />
          </div>
        </div>
      </nav>
  )
}