import { useNavigate } from "react-router-dom";

const Home = () => {
  const naveget = useNavigate()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>naveget('OrderSummery')}>Click me</button>
    </div>
  );
};
export default Home;
