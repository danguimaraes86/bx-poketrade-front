
export default function FairTradeButton({ loading }) {

  function handleLoadingIcon(loading) {
    if (!loading) {
      return (
        <button className='btn btn-success' >
          {'A troca está justa '}<i className='bi bi-plus-circle' />
        </button>
      )
    } else {
      return (
        <button className='btn btn-success' type='button' disabled>
          <div className='spinner-border spinner-border-sm' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </button>
      )
    }
  }

  return (
    handleLoadingIcon(loading)
  )
}