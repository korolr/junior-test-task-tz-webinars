import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from "../actions/profileActions"

const initialState = {
  data: {},
  error: "",
}

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { ...state, error: "" }

    case PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case PROFILE_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
