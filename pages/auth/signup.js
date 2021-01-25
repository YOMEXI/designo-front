import { useEffect } from "react"
import { Formik, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import FormControl from "../../components/formik/FormikControl"
import * as Yup from "yup"
import { useRouter } from "next/router"
import Footer from "../../components/headers/Footer"
import { Row, Container } from "react-bootstrap"
import Layout from "../../components/headers/Layout"
import {
  errorMessage,
  successMessage,
  Loader,
} from "./../../components/alerts/alerts"
import AuthHeader from "./../../components/headers/authHeader"
import { signup } from "./../../redux/authReducer/authActions"

const SignUp = () => {
  const router = useRouter()

  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)
  const { loading, error, success, registered } = auth

  //
  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        router.push("/")
      }, 3000)
    }
  }, [router, registered])

  const initialValues = {
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  }

  //
  const validationSchema = Yup.object({
    firstname: Yup.string().min(1).required("required"),
    lastname: Yup.string().min(1).required("required"),
    email: Yup.string().email("invalid email format").required("required"),
    password: Yup.string().min(7, "At least 7 characters").required("required"),
  })

  //
  const onSubmit = (values, onSubmitProps) => {
    dispatch(signup(values))
    onSubmitProps.resetForm()
  }

  return (
    <>
      <Layout>
        <AuthHeader />
        {error && errorMessage(error)}
        {success && successMessage(success)}
        {loading && <Loader />}
        <Container className="bg">
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
                      title="Sign Up"
                      placeholder="firstname"
                      name="firstname"
                      rest=""
                      type="input"
                    />
                    <FormControl
                      placeholder="lastname"
                      name="lastname"
                      rest=""
                      type="input"
                    />
                    <FormControl
                      placeholder="email"
                      name="email"
                      rest=""
                      type="input"
                    />
                    <FormControl
                      placeholder="password"
                      name="password"
                      rest=""
                      type="password"
                    />
                    <Row className="d-flex justify-content-center align-items-center btn-position mt-4">
                      <button type="submit" className="btn">
                        Register
                      </button>
                    </Row>
                  </Form>
                </>
              )
            }}
          </Formik>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default SignUp
