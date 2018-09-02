import axios from "axios"

export const PROFILE_REQUEST = "PROFILE_REQUEST"
export const PROFILE_SUCCESS = "PROFILE_SUCCESS"
export const PROFILE_FAIL = "PROFILE_FAIL"

export function profileAction(id) {
  return dispatch => {
    dispatch({
      type: PROFILE_REQUEST,
    })

    axios
      .get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${1}`)
      .then(function(response) {
        dispatch({
          type: PROFILE_SUCCESS,
          payload: response.data.data,
        })
      })
      .catch(function(err) {
        dispatch({
          type: PROFILE_FAIL,
          payload: "Ошибка сервера",
        })
      })
  }
}
