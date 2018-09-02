import { NEWS_REQUEST, NEWS_SUCCESS, NEWS_FAIL } from "../actions/newsActions"

const initialState = {
  data: [],
  error: "",
}

export function newsReducer(state = initialState, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return { ...state, error: "" }

    case NEWS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }

    case NEWS_FAIL:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
