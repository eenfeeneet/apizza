import axios from "axios";
import { GET_SAUCES, ADD_SAUCE, DELETE_SAUCE, SAUCES_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getSauces = () => dispatch => {
    dispatch(setSaucesLoading());
    axios
        .get("/api/sauces")
        .then(res =>
            dispatch({
                type: GET_SAUCES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addSauce = item => (dispatch, getState) => {
    axios
        .post("/api/sauces", item, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_SAUCE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteSauce = id => (dispatch, getState) => {
    axios
        .delete(`/api/sauces/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_SAUCE,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setSaucesLoading = () => {
    return {
        type: SAUCES_LOADING
    };
};
