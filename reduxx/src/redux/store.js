import {createStore} from "redux";
import cakeReducer from "./cakes/cakeReducer";

const reduxStore = createStore(cakeReducer);

export default reduxStore;
