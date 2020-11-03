import {FETCH_ARTISTS} from './actionTypes';

const initialState = {
  artists: [],
};

export default (state = initialState, action) => {
  console.log('action.type',action.type);
  switch (action.type) {
    case `${FETCH_ARTISTS}_FULFILLED`:
      return {...state, artists: action.payload.data};

    default:
      return state;
  }
};
