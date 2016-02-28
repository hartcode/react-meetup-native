import types from '../constants/ActionTypes';

const initialState = {
  count: '',
  results: null
};


export default function example(state = initialState, action) {
    switch (action.type) {

	    case types.RECEIVE_DATA:
	    	console.log('RECEIVE_DATA: '+ action.payload.results);
	        return Object.assign({}, state, {results: action.payload.results, count: action.payload.count});

	    default:
	        return state;
    }
}