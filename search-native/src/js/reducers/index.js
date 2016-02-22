import {combineReducers} from 'redux';
import { locationReducer } from 'redux-history';

//import example from './example';

import productList from './products';

const rootReducer = combineReducers({
  productList,
  locationReducer
});

export default rootReducer;
