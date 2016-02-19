import * as types from '../constants/ActionTypes';

const initialState = {

  title: 'Example',
  description: 'example...'

};

export default function example(state = initialState, action) {
    switch (action.type) {
    case types.RECIEVE_DATA:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}