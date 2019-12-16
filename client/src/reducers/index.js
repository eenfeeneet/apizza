import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import pizzaReducer from './pizzaReducer';
import crustReducer from './crustReducer';
import sauceReducer from './sauceReducer';
import toppingReducer from './toppingReducer';
import sizeReducer from './sizeReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  pizza: pizzaReducer,
  crust: crustReducer,
  sauce: sauceReducer,
  topping: toppingReducer,
  size: sizeReducer,
  order: orderReducer
});
