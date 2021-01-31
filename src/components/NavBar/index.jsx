import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark border-bottom border-warning'>
      <div className='container'>
        <Link href='/'>
          <div className='d-flex btn navbar-brand'>
            <img src='/pokeapi_256.png' width='60' height='48' className='navbar-brand' />
            <div className='align-self-center text-warning'>
              PokeTrade
            </div>
          </div>
        </Link>
        <Link href='/history'>
          <div className='btn'>
            <span className='text-warning text-center my-auto'>
              <i className='bi bi-clock-history fs-3' />
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}