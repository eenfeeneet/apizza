import axios from "axios";
import { GET_SIZES, ADD_SIZE, DELETE_SIZE, SIZES_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getSizes = () => dispatch => {
    dispatch(setSizesLoading());
    axios
        .get("/api/sizes")
        .then(res =>
            dispatch({
                type: GET_SIZES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addSize = size => (dispatch, getState) => {
    axios
        .post("/api/sizes", size, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_SIZE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteSize = id => (dispatch, getState) => {
    axios
        .delete(`/api/sizes/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_SIZE,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setSizesLoading = () => {
    return {
        type: SIZES_LOADING
    };
};
