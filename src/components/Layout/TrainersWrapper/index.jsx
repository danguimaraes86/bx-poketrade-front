
export default function TrainersWrapper({ children }) {
  return (
    <div className='container card my-2 p-2'>
      <div className='row'>
        { children }
      </div>
    </div>
  )
}