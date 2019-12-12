import axios from "axios";
import {
    GET_TOPPINGS,
    ADD_TOPPING,
    DELETE_TOPPING,
    TOPPINGS_LOADING
} from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getToppings = () => dispatch => {
    dispatch(setToppingsLoading());
    axios
        .get("/api/toppings")
        .then(res =>
            dispatch({
                type: GET_TOPPINGS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addTopping = topping => (dispatch, getState) => {
    axios
        .post("/api/toppings", topping, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_TOPPING,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteTopping = id => (dispatch, getState) => {
    axios
        .delete(`/api/toppings/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_TOPPING,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setToppingsLoading = () => {
    return {
        type: TOPPINGS_LOADING
    };
};
