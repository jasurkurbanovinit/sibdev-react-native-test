import {FETCH_DATA, SEARCH_CHANGE, SAVE_SEARCH} from './../actionTypes';

const initState = {
  hits: [],
  searchValue: '',
  searchSaved: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, hits: action.payload};
    case SEARCH_CHANGE:
      return {...state, searchValue: action.payload};
    case SAVE_SEARCH:
      return {...state, searchSaved: action.payload};
    default:
      return state;
  }
};

export default rootReducer;
