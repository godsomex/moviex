import {MOVIE_ERROR, GET_CATEGORIES, GET_MOVIE_LIST} from './constants';

const GET = 'GET';

//GET  CATEGORIES
export const getCategories = () => async (dispatch) => {
  try {
    const result = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=e84c2c035e02e7db2c43f70bc718f3e5&language=en-US`',
      {
        method: GET,
      },
    );
    const data = await result.json();
    dispatch({
      type: GET_CATEGORIES,
      payload: data.genres,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: err.response,
    });
  }
};

//GET  MOVIELIST
export const getMovieList = (id, page) => async (dispatch) => {
  try {
    const result = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=e84c2c035e02e7db2c43f70bc718f3e5&with_genres=${id}&page=${page}`,
      {
        method: GET,
      },
    );
    const data = await result.json();
    dispatch({
      type: GET_MOVIE_LIST,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MOVIE_ERROR,
      payload: err.response,
    });
  }
};
