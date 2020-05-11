import { FETCH_SUCCESS, REMOVE_ITEM } from 'actions';

const initialState = {
  wallpapers: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        wallpapers: [...action.payload.data.results],
      };
    case REMOVE_ITEM:
      return {
        ...state,
      };
    default:
      return {
        state,
      };
  }
};

export default rootReducer;
