import {combineReducers} from 'redux';
import { locationReducer } from 'redux-history';

//import example from './example';

import productList from './products';
import imageList from './images';

const rootReducer = combineReducers({
  productList,
  imageList,
  locationReducer
});

export default rootReducer;
