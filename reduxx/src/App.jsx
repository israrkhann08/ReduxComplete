import { useDispatch, useSelector } from "react-redux";
import {
  buyChocoCake,
  buyVanillaCakeAction,
  refundChocoCake,
  refundVanillaCakeAction,
} from "./redux/cakes/cakeAction";
// import {vanillaCakes, chocoCakes} from "./redux/cakes/cakeReducer"

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
          dispatch(buyChocoCake);
        }}
      >
        {" "}
        BUY CHOCO CAKE
      </button>

      <button
        onClick={() => {
          dispatch(refundChocoCake);
        }}
      >
        {" "}
        REFUND CHOCO CAKE
      </button>
    </>
  );
};

export default App;
