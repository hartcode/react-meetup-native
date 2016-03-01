import ActionTypes from '../constants/ActionTypes';

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
			  var imageurls = [{imageurl:'https://img0.etsystatic.com/139/0/12125241/il_fullxfull.926740316_41gj.jpg'},
			                {imageurl:'https://img1.etsystatic.com/114/0/12125241/il_fullxfull.917892587_rkfa.jpg'},
							{imageurl:'https://img0.etsystatic.com/136/0/12125241/il_fullxfull.917871430_nk5z.jpg'},
							{imageurl:'https://img0.etsystatic.com/124/0/12125241/il_fullxfull.918149086_ekql.jpg'},
							{imageurl:'https://img1.etsystatic.com/109/0/12125241/il_fullxfull.917591777_jjoi.jpg'},
							{imageurl:'https://img1.etsystatic.com/103/0/12125241/il_fullxfull.890991045_84bp.jpg'},
							{imageurl:'https://img1.etsystatic.com/133/0/12125241/il_fullxfull.890983265_anlz.jpg'},
							{imageurl:'https://img1.etsystatic.com/140/0/12125241/il_fullxfull.887630799_afhv.jpg'},
							{imageurl:'https://img1.etsystatic.com/124/0/12125241/il_fullxfull.887426207_k1e1.jpg'}];
		  var i = 0;
          results.forEach(function (item){
            item.image = imageurls[i];
			i++;
          })
		  dispatch(receiveData(json))
      })
      .catch((err) => dispatch(receiveError(err)));
  }
}
