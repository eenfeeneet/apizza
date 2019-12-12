import {
    GET_SAUCES,
    ADD_SAUCE,
    DELETE_SAUCE,
    SAUCES_LOADING
} from "../actions/types";

const initialState = {
    sauces: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SAUCES:
            return {
                ...state,
                sauces: action.payload,
                loading: false
            };
        case DELETE_SAUCE:
            return {
                ...state,
                sauces: state.sauces.filter(
                    sauce => sauce._id !== action.payload
                )
            };
        case ADD_SAUCE:
            return {
                ...state,
                sauces: [action.payload, ...state.sauces]
            };
        case SAUCES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
