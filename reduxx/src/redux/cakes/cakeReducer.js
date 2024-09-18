import {
    BUY_VANILLA_CAKE,
    REFUND_VANILLA_CAKE,
    BUY_CHOCO_CAKE,
    REFUND_CHOCO_CAKE,
} from "./cakeActionTypes";

const initialState = {
    vanillaCakes: 20,
    chocoCakes: 20,
};

const cakeReducer = (store = initialState, action) => {
    if (action.type === BUY_VANILLA_CAKE) {
        return {
            ...store,
            vanillaCakes: store.vanillaCakes - 1,
        };
    } else if (action.type === REFUND_VANILLA_CAKE) {
        const obj = {
            ...store,
            vanillaCakes: store.vanillaCakes + 1,
        };
        return obj;
    } else if (action.type === BUY_CHOCO_CAKE) {
        return {
            ...store,
            chocoCakes: store.chocoCakes - 1,
        };
    } else if (action.type === REFUND_CHOCO_CAKE) {
        return {
            ...store,
            chocoCakes: store.chocoCakes + 1,
        };
    } else {
        return store;
    }
};

export default cakeReducer;