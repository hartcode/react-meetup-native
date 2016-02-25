import types from '../constants/ActionTypes';

const initialState = {
  image: '',
};


export default function example(state = initialState, action) {
    switch (action.type) {

	    case types.RECEIVE_DATA:
	    	console.log('RECEIVE_DATA: '+action.payload.image);
	        return Object.assign({}, state, {image: action.payload.image});

	    default:
	        return state;
    }
}