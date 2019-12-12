import axios from "axios";
import { GET_PIZZAS, ADD_PIZZA, DELETE_PIZZA, PIZZAS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getPizzas = () => dispatch => {
    dispatch(setPizzasLoading());
    axios
        .get("/api/pizzas")
        .then(res =>
            dispatch({
                type: GET_PIZZAS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addPizza = pizza => (dispatch, getState) => {
    axios
        .post("/api/pizzas", pizza, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_PIZZA,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deletePizza = id => (dispatch, getState) => {
    axios
        .delete(`/api/pizzas/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_PIZZA,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setPizzasLoading = () => {
    return {
        type: PIZZAS_LOADING
    };
};
