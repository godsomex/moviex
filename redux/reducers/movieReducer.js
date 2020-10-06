import {
  GET_MOVIE_LIST,
  GET_CATEGORIES,
  SEARCH_MOVIE,
} from '../actions/constants';

export const initialState = {
  categories: [],
  movieList: {
    results: [],
  },
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SEARCH_MOVIE:
    case GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default movieReducer;
