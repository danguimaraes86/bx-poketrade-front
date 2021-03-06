export default function TrainerInput({ setTrainer }) {

  return (
    <div className='input-group mb-2'>
      <span className='input-group-text bg-dark text-warning' id='trainer-nickname'>@</span>
      <input
        type='text'
        placeholder='digite seu nickname'
        className='form-control'
        aria-label='Sizing example input'
        aria-describedby='trainer-nickname'
        onChange={(e) => setTrainer(e.target.value) }
        />
    </div>
  )
}