import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
} from "./categoryConstant"

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return {
        loading: true,
      }
    case CREATE_CATEGORY:
      return {
        loading: false,
        cate: action.payload,
        successMsg: action.payload.message,
      }
    case CREATE_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
