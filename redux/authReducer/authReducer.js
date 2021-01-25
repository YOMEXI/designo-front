import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_REQUEST,
  SIGNIN_SUCCESS,
  SIGN_IN_FAIL,
} from "./userConstant"

//

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        loading: false,
        signedIn: false,
        error: action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
        signedIn: true,
        user: action.payload,
      }
    case LOGIN_REQUEST:
      return {
        loading: true,
      }
    case SIGN_REQUEST:
      return {
        loading: true,
      }
    case SIGNIN_SUCCESS:
      return {
        loading: false,
        registered: true,
        success: action.payload.message,
      }
    case SIGN_IN_FAIL:
      return {
        loading: false,
        registered: false,
        error: action.payload,
      }
    case LOGOUT:
      return {}
      break

    default:
      return state
  }
}
