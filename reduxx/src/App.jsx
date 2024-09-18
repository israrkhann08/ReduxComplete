import { useDispatch, useSelector } from "react-redux";
import {
  buyChocoCakeAction,
  buyVanillaCakeAction,
  refundChocoCakeAction,
  refundVanillaCakeAction,
} from "./redux/cakes/cakeAction";


const App = () => {
  const dispatch = useDispatch();
  const abc = useSelector((x) => {
    return x;
  });
  // console.log(abc);
  return (
    <>
      <h1>Vanilla Cake: {abc.vanillaCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyVanillaCakeAction);
        }}
        style={{marginRight:"12px"}}
      >
        {" "}
        BUY VANILLA CAKE
      </button>

      <button
        onClick={() => {
          dispatch(refundVanillaCakeAction);
        }}
      >
        {" "}
        REFUND VANILLA CAKE
      </button>
      <br />
      <br />

      <h1>Choco Cake: {abc.chocoCakes}</h1>
      <button
        onClick={() => {
          dispatch(buyChocoCakeAction);
        }}
        style={{marginRight:"12px"}}
      >
        {" "}
        BUY CHOCO CAKE
      </button>

      <button
        onClick={() => {
          dispatch(refundChocoCakeAction);
        }}
      >
        {" "}
        REFUND CHOCO CAKE
      </button>
    </>
  );
};

export default App;
