import {
    GET_SIZES,
    ADD_SIZE,
    DELETE_SIZE,
    SIZES_LOADING
} from "../actions/types";

const initialState = {
    sizes: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SIZES:
            return {
                ...state,
                sizes: action.payload,
                loading: false
            };
        case DELETE_SIZE:
            return {
                ...state,
                sizes: state.sizes.filter(size => size._id !== action.payload)
            };
        case ADD_SIZE:
            return {
                ...state,
                sizes: [action.payload, ...state.sizes]
            };
        case SIZES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
