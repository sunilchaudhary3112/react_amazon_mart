import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../actionTypes/productActionTypes";

function productListReducer(state = { products: [] }, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true }
            break;

        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
            break;

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
            break;

        default:
            return state;
            break;
    }
}

function productDetailsReducer(state = { product: {} }, action) {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true }
            break;

        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
            break;

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload }
            break;

        default:
            return state;
            break;
    }
}

export { productListReducer, productDetailsReducer };