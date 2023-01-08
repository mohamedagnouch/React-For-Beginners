import { useNavigate } from 'react-router-dom';


const OrderSummery =()=>{
  const naveget = useNavigate()

    return (
      <div>
        <h1>Hello order summary</h1>
        <button onClick={()=>naveget(-1)}>Back</button>
      </div>
    )
  
}

export default OrderSummery;
