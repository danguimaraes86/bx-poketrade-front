import FairTradeButton from './FairTradeButton'
import NotFairTradeButton from './NotFairTradeButton'

export default function TradeButton({ isFairTrade }) {

  function handleTradeButton(fair) {
    if(fair){
      return <FairTradeButton />
    } else {
      return <NotFairTradeButton />
    }
  }

  return (
    <div className='container my-2 p-2'>
      <div className='d-flex justify-content-center'>
        {handleTradeButton(isFairTrade)}
      </div>
    </div>
  )
}