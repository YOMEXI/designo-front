import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_REQUEST,
  SIGNIN_SUCCESS,
  SIGN_IN_FAIL,
} from "./userConstant"
import axios from "axios"

//

export const signup = values => async dispatch => {
  try {
    dispatch({
      type: SIGN_REQUEST,
    })

    const { data } = await axios.post(
      `${process.env.API}/api/v1/auth/signup`,
      values
    )

    dispatch({
      type: SIGNIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem("message", JSON.stringify(data.message))
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}

//

export const login = values => async dispatch => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })

    const { data } = await axios.post(
      `${process.env.API}/api/v1/auth/login`,
      values
    )

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem("user", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
      // error.response && error.response.data.error
      //   ? error.response.data.error
      //   : error.message,
    })
  }
}
