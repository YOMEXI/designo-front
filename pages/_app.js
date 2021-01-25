import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./../components/headers/header.css"
import "./../components/formik/form.css"
import { Provider } from "react-redux"
import store from "./../redux/store"

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

//
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
