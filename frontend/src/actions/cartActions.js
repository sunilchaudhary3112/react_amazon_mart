import axios from 'axios';
import { CART_ADD_ITEM } from '../actionTypes/cartActionTypes';

const addToCart = (productId, qty) => async (dispatch) => {
    try {
        const { data } = await axios.get("/api/product/" + productId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
    } catch (error) {

    }
}

export default addToCart;