
export default function TrainerCard({ nickname }) {

  return (
    <div className='input-group mb-2'>
      <span className='input-group-text bg-dark text-warning' id='trainer-nickname'>@</span>
      <input
        type='text'
        className='form-control'
        value={nickname}
        disabled={true}
        />
    </div>
  )
}