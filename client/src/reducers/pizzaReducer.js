import {
    GET_PIZZAS,
    ADD_PIZZA,
    DELETE_PIZZA,
    PIZZAS_LOADING
} from "../actions/types";

const initialState = {
    pizzas: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PIZZAS:
            return {
                ...state,
                pizzas: action.payload,
                loading: false
            };
        case DELETE_PIZZA:
            return {
                ...state,
                pizzas: state.pizzas.filter(
                    pizza => pizza._id !== action.payload
                )
            };
        case ADD_PIZZA:
            return {
                ...state,
                pizzas: [action.payload, ...state.pizzas]
            };
        case PIZZAS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
