import { CART_ADD_ITEM } from "../actionTypes/cartActionTypes";

function cartReducers(state = { cartItems: [] }, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            // console.log("item------------", item);
            // console.log("state.cartItems---------", state.cartItems);
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return { cartItems: state.cartItems.map(x => x.product === product.product ? item : x) }
            } else {
                return { cartItems: [...state.cartItems, item] }
            }

            break;

        default:
            return state;
            break;
    }
}

export { cartReducers };