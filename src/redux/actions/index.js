import axios from 'axios';
import {FETCH_DATA, SAVE_SEARCH, SEARCH_CHANGE} from './../actionTypes';

export const searchChanged = (text) => ({
  type: SEARCH_CHANGE,
  payload: text,
});

export const saveSearch = (text) => ({
  type: SAVE_SEARCH,
  payload: text,
});

export const fetchData = (text) => async (dispatch) => {
  await axios
    .get(`https://hn.algolia.com/api/v1/search?query=${text}`)
    .then((result) =>
      dispatch({
        type: FETCH_DATA,
        payload: result.data.hits,
      }),
    );
};
