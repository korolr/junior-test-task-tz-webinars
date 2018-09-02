import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGIN_OUT = "LOGIN_OUT"

export function loginAction(email, password) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
    })

    axios
      .post("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
        email: email,
        password: password,
      })
      .then(function(response) {
        if (response.data.message === "wrong_email_or_password") {
          dispatch({
            type: LOGIN_FAIL,
            payload: "Ошибка при вводе пароля",
          })
        } else {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data.data.id,
          })
        }
      })
      .catch(function(err) {
        dispatch({
          type: LOGIN_FAIL,
          payload: "Ошибка сервера",
        })
      })
  }
}

export function logOut() {
  return {
    type: LOGIN_OUT,
  }
}
