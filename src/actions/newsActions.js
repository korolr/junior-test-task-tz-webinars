import axios from "axios"

export const NEWS_REQUEST = "NEWS_REQUEST"
export const NEWS_SUCCESS = "NEWS_SUCCESS"
export const NEWS_FAIL = "NEWS_FAIL"

export function getNews() {
  return dispatch => {
    dispatch({
      type: NEWS_REQUEST,
    })

    axios
      .get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
      .then(function(response) {
        dispatch({
          type: NEWS_SUCCESS,
          payload: response.data.data,
        })
      })
      .catch(function(err) {
        dispatch({
          type: NEWS_FAIL,
          payload: "Ошибка сервера",
        })
      })
  }
}
