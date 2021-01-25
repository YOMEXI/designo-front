import {
  GET_ALL_IMAGES_FAIL,
  IMAGE_FAIL,
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_UPLOAD_SUCCESS,
  DELETE_IMG_FAIL,
  DELETE_IMG_SUCCESS,
} from "./imageConstant"
import axios from "axios"
import { isAuth } from "./../../components/access/isAuth"

//
//

export const unsplashImages = id => async dispatch => {
  try {
    dispatch({
      type: IMAGE_REQUEST,
    })

    const { data } = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=sTraS4T5TLwo8RAu7g4XqReWh_9ryKsTK3uw3a2LZt8`
    )

    dispatch({
      type: IMAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: IMAGE_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}

//
export const uploadImg = formData => async dispatch => {
  try {
    dispatch({
      type: IMAGE_REQUEST,
    })

    const { data } = await axios.post(
      `${process.env.API}/api/v1/image/upload`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${isAuth().token}`,
        },
      }
    )

    dispatch({
      type: IMAGE_UPLOAD_SUCCESS,
      payload: data,
    })
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  } catch (error) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}

//

export const deleteImg = id => async dispatch => {
  try {
    dispatch({
      type: IMAGE_REQUEST,
    })

    const { data } = await axios.post(
      `${process.env.API}/api/v1/image/delete`,
      { id },
      {
        headers: {
          Authorization: `Bearer ${isAuth().token}`,
        },
      }
    )

    dispatch({
      type: DELETE_IMG_SUCCESS,
      payload: data.message,
    })
    setTimeout(() => {
      window.location.reload()
    }, 5000)
  } catch (error) {
    dispatch({
      type: DELETE_IMG_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
