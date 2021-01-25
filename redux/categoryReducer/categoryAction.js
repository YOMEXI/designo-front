import {
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
} from "./categoryConstant"

import axios from "axios"
import { isAuth } from "./../../components/access/isAuth"
//

//
export const createCategory = name => async dispatch => {
  try {
    dispatch({
      type: CREATE_CATEGORY_REQUEST,
    })

    const { data } = await axios.post(
      `${process.env.API}/api/v1/category/create`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${isAuth().token}`,
        },
      }
    )
    dispatch({
      type: CREATE_CATEGORY,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message,
    })
  }
}
