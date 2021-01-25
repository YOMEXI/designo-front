import { Formik, Form } from "formik"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormControl from "../../components/formik/FormikControl"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { Row } from "react-bootstrap"
import Layout from "../../components/headers/Layout"
import Footer from "../../components/headers/Footer"
import AuthHeader from "./../../components/headers/authHeader"
import {
  errorMessage,
  successMessage,
  Loader,
} from "./../../components/alerts/alerts"
import { login } from "./../../redux/authReducer/authActions"

//

const Login = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  //
  const auth = useSelector(state => state.auth)
  const { loading, error, success, signedIn, user } = auth

  const initialValues = {
    password: "",
    email: "",
  }
  useEffect(() => {
    if (user) {
      if (user.token && user.isAdmin === true) {
        router.push("/admin/adminPanel")
      } else {
        router.push("/")
      }
    }
  }, [user, router])

  //
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email format").required("required"),
    password: Yup.string().min(7, "At least 7 characters").required("required"),
  })

  //
  const onSubmit = (values, onSubmitProps) => {
    dispatch(login(values))
  }

  return (
    <>
      <Layout>
        <div className="text-dark">
          <AuthHeader />
        </div>
        {error && errorMessage(error)}
        {success && successMessage(success)}
        {loading && <Loader />}
        <div className="bg">
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {formik => {
                return (
                  <>
                    <Form className="faded">
                      <FormControl
                        title="Sign In"
                        placeholder="email"
                        name="email"
                        type="input"
                      />
                      <FormControl
                        placeholder="password"
                        name="password"
                        type="password"
                      />
                      <Row className="d-flex justify-content-center align-items-center btn-position mt-4">
                        <button type="submit" className="btn">
                          Login
                        </button>
                      </Row>
                    </Form>
                  </>
                )
              }}
            </Formik>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  )
}

export default Login
