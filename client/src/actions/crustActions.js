import axios from "axios";
import { GET_CRUSTS, ADD_CRUST, DELETE_CRUST, CRUSTS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getCrusts = () => dispatch => {
    dispatch(setCrustsLoading());
    axios
        .get("/api/crusts")
        .then(res =>
            dispatch({
                type: GET_CRUSTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addCrust = crust => (dispatch, getState) => {
    axios
        .post("/api/crusts", crust, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_CRUST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteCrust = id => (dispatch, getState) => {
    axios
        .delete(`/api/crusts/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_CRUST,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setCrustsLoading = () => {
    return {
        type: CRUSTS_LOADING
    };
};
