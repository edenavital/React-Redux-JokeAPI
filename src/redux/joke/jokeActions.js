import axios from "axios";
import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE
} from "./jokeTypes";

export const fetchJokeRequest = () => {
  return {
    type: FETCH_JOKE_REQUEST
  };
};

export const fetchJokeSuccess = joke => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: joke
  };
};

export const fetchJokeFailure = err => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: err
  };
};

export const fetchJoke = () => {
  console.log("Inside fetchJoke");
  return dispatch => {
    dispatch(fetchJokeRequest);

    axios
      .get("https://sv443.net/jokeapi/category/Dark?blacklistFlags=nsfw")
      .then(res => {
        console.log("fetch success");
        const joke = res.data;
        console.log(joke);
        dispatch(fetchJokeSuccess(joke));
      })
      .catch(err => {
        const error = err.message;
        console.log(err);
        dispatch(fetchJokeFailure(error));
      });
  };
};
