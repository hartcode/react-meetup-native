import ActionTypes from '../constants/ActionTypes';


var ETSY_URL = 'openapi.etsy.com';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = process.env.ETSY_API_KEY;
var ETSY_LISTINGS_PATH = '/v2/shops/' + ETSY_SHOP_ID + '/listings/active?api_key=' + ETSY_API_KEY;
var ETSY_IMAGES_PATH = '/v2/listings/';

var API_URL = 'https://'+ETSY_URL+ETSY_IMAGES_PATH;
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
    fetch(API_URL+item.listing_id+'/images?api_key='+ETSY_API_KEY)
    .then((req) => req.json())
    .then((json) => {
        item.image = json.results[0];
        console.log(item.image)
    })
    .catch((err) => dispatch(receiveError(err)));
  }
}

