import ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function requestData() {
    return {
        type: ActionTypes.REQUEST_DATA,
        payload: null
    };
}

function receiveData(data) {
    return {
        type: ActionTypes.RECEIVE_DATA,
        payload: data
    };
}

function receiveError(err) {
    console.log(data);
    return {
        type: ActionTypes.RECEIVE_ERROR,
        payload: err,
        error: true
    };
}


export function fetchData(url) {
  return (dispatch) => {
    dispatch(requestData())
    return fetch(url)
      .then((req) => req.json())
      .then((json) => dispatch(receiveData(json)))
      .catch((err) => dispatch(receiveError(err)));
  }
}

