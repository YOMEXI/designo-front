import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { authReducer } from "./authReducer/authReducer"
import { imageReducer } from "./imageReducer/imageReducer"
import { categoryReducer } from "./categoryReducer/categoryReducer"
//

//
const reducer = combineReducers({
  auth: authReducer,
  images: imageReducer,
  Category: categoryReducer,
})

//

const userLoginDetails = () => {
  if (typeof window !== "undefined" && localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"))
  } else {
    return null
  }
}
//
const initialState = {
  auth: { loginDetails: userLoginDetails() },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
//

export default store
