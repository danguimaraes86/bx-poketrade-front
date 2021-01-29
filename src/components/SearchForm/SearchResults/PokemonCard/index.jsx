export default function PokemonCard({ key, pokemon }) {
  return (
    <div key={key} className='col-12 col-md-4 my-2 mb-md-0'>
            <div className='card p-2'>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" className="card-img-top" alt="..." />
              <div>
                <h5 className="card-title text-capitalize text-center">{pokemon}</h5>
                <div className='d-flex justify-content-between'>
                  <a href="#" className="btn btn-dark text-warning">
                    Add
                    <br />
                    {'trainer_01'}
                  </a>
                  <a href="#" className="btn btn-dark text-warning">
                    Add
                    <br />
                    {'trainer_02'}
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}