import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchItems = () => (dispatch) => {
  return axios
    .get(
      'https://api.unsplash.com/search/photos/?client_id=IRGoSYyCMIdK3KMW3VxYZLLiiKP_smlQmLItm2rZQyg',
      {
        params: {
          query: 'summer-night',
          per_page: 30,
        },
      },
    )
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
        },
      });
    });
};
