import { Form, FormControl, Container, Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import Footer from "../../components/headers/Footer"
import {
  errorMessage,
  successMessage,
  Loader,
} from "./../../components/alerts/alerts"
import { createCategory } from "./../../redux/categoryReducer/categoryAction"
import Layout from "../../components/headers/Layout"
import withAdmin from "./../../components/access/withAdmin"
import AuthHeader from "./../../components/headers/authHeader"

const CreateCategory = () => {
  const dispatch = useDispatch()

  //
  const Category = useSelector(state => state.Category)
  const { loading, error, cate, successMsg } = Category

  const [category, setcategory] = useState({
    name: "",
  })

  const { name } = category
  const onSubmit = e => {
    e.preventDefault()
    dispatch(createCategory(name))
    setcategory({ ...category, name: "" })
  }

  const handleChange = name => e => {
    setcategory({ ...category, [name]: e.target.value })
  }

  return (
    <Layout>
      <AuthHeader />
      {error && errorMessage(error)}
      {successMsg && successMessage(successMsg)}
      {loading && <Loader />}
      <Container>
        <Row className=" ">
          <Col lg={8} md={9} sm={9} xs={9}>
            <Form
              onSubmit={onSubmit}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <Col className="CreateCategory">
                <FormControl
                  type="text"
                  onChange={handleChange("name")}
                  value={name}
                ></FormControl>
              </Col>

              <Button className="justify-content-center" type="submit">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default withAdmin(CreateCategory)
