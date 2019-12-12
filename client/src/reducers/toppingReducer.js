import {
    GET_TOPPINGS,
    ADD_TOPPING,
    DELETE_TOPPING,
    TOPPINGS_LOADING
} from "../actions/types";

const initialState = {
    toppings: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOPPINGS:
            return {
                ...state,
                toppings: action.payload,
                loading: false
            };
        case DELETE_TOPPING:
            return {
                ...state,
                toppings: state.toppings.filter(
                    topping => topping._id !== action.payload
                )
            };
        case ADD_TOPPING:
            return {
                ...state,
                toppings: [action.payload, ...state.toppings]
            };
        case TOPPINGS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
