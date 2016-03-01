import {combineReducers} from 'redux';

//import example from './example';

import productList from './products';
import imageList from './images';

const rootReducer = combineReducers({
  productList,
  imageList
});

export default rootReducer;
