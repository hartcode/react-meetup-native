import ActionTypes from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

var API_URL = 'http://localhost:4090/api/images?id=';
function requestData() {
    return {
        type: ActionTypes.REQUEST_DATA,
        payload: null
    };
}

function receiveData(data) {
  console.log('receiveData');
    return {
        type: ActionTypes.RECEIVE_DATA,
        payload: data
    };
}

function receiveError(err) {
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
      .then((json) => {
		      var results = json.results;
          results.forEach(function (item){
            fetchImage(item)
          })
		  dispatch(receiveData(json))
      })
      .catch((err) => dispatch(receiveError(err)));
  }
}

export function fetchImage(item){
  return (dispatch) => {
    console.log(item)
    console.log(item.listing_id)
    fetch(API_URL+item.listing_id)
    .then((req) => req.json())
    .then((json) => {
        item.image = json.results[0];
        console.log(item.image)
    })
    .catch((err) => dispatch(receiveError(err)));
  }
}

