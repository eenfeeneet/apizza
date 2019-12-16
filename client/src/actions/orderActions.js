import axios from 'axios';
import { GET_ORDERS, ADD_ORDER, DELETE_ORDER, ORDERS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getOrders = () => dispatch => {
  dispatch(setOrdersLoading());
  axios
    .get('/api/orders')
    .then(res =>
      dispatch({
        type: GET_ORDERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addOrder = ORDER => (dispatch, getState) => {
  axios
    .post('/api/orders', ORDER, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ORDER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteOrder = id => (dispatch, getState) => {
  axios
    .delete(`/api/orders/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ORDER,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setOrdersLoading = () => {
  return {
    type: ORDERS_LOADING
  };
};
