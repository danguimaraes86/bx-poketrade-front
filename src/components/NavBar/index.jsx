
export default function NavBar() {
  return (
    <nav className='navbar navbar-dark bg-dark border-bottom border-warning'>
      <div className='container-fluid'>
        <div className='navbar-brand'>
          <img src='/favicon.ico' width='24' height='24' className='navbar-brand' />
              PokeTrade
            </div>
        <div>
          <i className='bi bi-clock-fill' style={{ color: 'white', fontSize: '1.5em' }} />
        </div>
      </div>
    </nav>
  )
}