import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_OUT,
} from "../actions/loginActions"

const initialState = {
  id: null,
  error: "",
  isLogin: false,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, id: null, error: "", isLogin: false }

    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload,
        isLogin: true,
      }
    case LOGIN_OUT:
      return { ...state, id: null, error: "", isLogin: false }
    case LOGIN_FAIL:
      return { ...state, id: null, error: action.payload, isLogin: false }

    default:
      return state
  }
}
