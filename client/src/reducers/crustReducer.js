import {
    GET_CRUSTS,
    ADD_CRUST,
    DELETE_CRUST,
    CRUSTS_LOADING
} from "../actions/types";

const initialState = {
    crusts: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CRUSTS:
            return {
                ...state,
                crusts: action.payload,
                loading: false
            };
        case DELETE_CRUST:
            return {
                ...state,
                crusts: state.crusts.filter(
                    crust => crust._id !== action.payload
                )
            };
        case ADD_CRUST:
            return {
                ...state,
                crusts: [action.payload, ...state.crusts]
            };
        case CRUSTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
