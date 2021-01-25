import {
  IMAGE_FAIL,
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_UPLOAD_SUCCESS,
  GET_ALL_IMAGES,
  GET_ALL_IMAGES_FAIL,
  DELETE_IMG_FAIL,
  DELETE_IMG_SUCCESS,
} from "./imageConstant"

//

export const imageReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_IMG_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case DELETE_IMG_SUCCESS:
      return {
        loading: false,
        succ: true,
        success: action.payload,
      }
    case GET_ALL_IMAGES_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case GET_ALL_IMAGES:
      return {
        loading: false,
        img: action.payload,
      }
    case IMAGE_UPLOAD_SUCCESS:
      return {
        loading: false,
        success: action.payload.message,
      }
    case IMAGE_UPLOAD_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case IMAGE_REQUEST:
      return {
        loading: true,
        succ: false,
      }

    case IMAGE_SUCCESS:
      return {
        loading: false,
        img: action.payload,
      }
    case IMAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
