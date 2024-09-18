import {
    BUY_VANILLA_CAKE,
    REFUND_VANILLA_CAKE,
    BUY_CHOCO_CAKE,
    REFUND_CHOCO_CAKE,
} from "./cakeActionTypes";

const buyVanillaCakeAction = {
    type: BUY_VANILLA_CAKE,
};

const refundVanillaCakeAction = {
    type: REFUND_VANILLA_CAKE,
};

const buyChocoCake = {
    type: BUY_CHOCO_CAKE,
};

const refundChocoCake = {
    type: REFUND_CHOCO_CAKE,
};

export {
    buyVanillaCakeAction,
    refundVanillaCakeAction,
    buyChocoCake,
    refundChocoCake,
};