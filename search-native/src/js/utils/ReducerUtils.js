export default function createReducer(initialState, handlers) {
  return function reducer(state, action) {
    if (state === undefined){
      state = initialState;
    }
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

// import Immutable, { Map, List } from 'immutable';

// export default function createReducer(initialState, handlers) {
//   return (state = initialState, action) => {
//     if (!Map.isMap(state) && !List.isList(state)) {
//       state = Immutable.fromJS(state);
//     }

//     const handler = handlers[action.type];

//     if (!handler) {
//       return state;
//     }

//     state = handler(state, action);

//     if (!Map.isMap(state) && !List.isList(state)) {
//       throw new TypeError('Reducers must return Immutable objects.');
//     }

//     return state;
//   };
// }
