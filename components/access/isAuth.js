import Router from "next/router"

export const isAuth = () => {
  if (process.browser) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"))
    }
  }
}

export const logout = () => {
  localStorage.removeItem("user")
  Router.push("/")
}
