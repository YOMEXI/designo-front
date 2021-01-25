import React, { useEffect, useState } from "react"
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import Layout from "../../components/headers/Layout"
import axios from "axios"
import Footer from "../../components/headers/Footer"
import { isAuth } from "./../../components/access/isAuth"
import {
  errorMessage,
  successMessage,
  Loader,
} from "./../../components/alerts/alerts"

import { uploadImg } from "./../../redux/imageReducer/imageActions"
import AuthHeader from "./../../components/headers/authHeader"
//

//
const Upload = () => {
  const dispatch = useDispatch()

  const [img, setimg] = useState({
    description: "",
    category: "",
    price: "",
    formData: process.browser && new FormData(this),
  })

  const [categories, setcategories] = useState("")

  const { description, category, formData, price } = img

  //img state from redux

  const images = useSelector(state => state.images)
  const { loading, error, image, success } = images
  //

  //
  const handleChange = name => e => {
    const value = name === "image" ? e.target.files[0] : e.target.value
    formData.set(name, value)
    setimg({ ...img, [name]: value })
  }

  //loading categories
  const cate = async () => {
    const { data } = await axios.get(`${process.env.API}/api/v1/category/`, {
      headers: {
        Authorization: `Bearer ${isAuth().token}`,
      },
    })

    setcategories(data)
  }

  useEffect(() => {
    cate()
  }, [formData, success, error])

  const onSubmit = async e => {
    e.preventDefault()
    dispatch(uploadImg(formData))

    setimg({ ...img, category: "", description: "", formData: "", price: "" })
    cate()
  }

  return (
    <>
      <Layout>
        <AuthHeader />
        <Container>
          <div className="d-flex justify-content-center mb-3">
            <h3 className=" ">Upload Image</h3>
          </div>
          {error && errorMessage(error)}
          {success && successMessage(success)}
          {loading && <Loader />}
          <Row>
            <Col lg={9} sm={10} md={10} xs={11}>
              <div className="bg-dark py-4 ">
                <Form onSubmit={onSubmit}>
                  <Col>
                    <FormControl
                      placeholder="Description"
                      type="text"
                      onChange={handleChange("description")}
                      value={description}
                      as="textarea"
                      cols="4"
                      rows="4"
                      className="my-4"
                    ></FormControl>
                  </Col>
                  <Col>
                    <FormControl
                      placeholder="Price"
                      type="number"
                      onChange={handleChange("price")}
                      value={price}
                      className="my-4"
                    ></FormControl>
                  </Col>
                  <Col>
                    <select onChange={handleChange("category")}>
                      <option>Select Category</option>
                      {categories &&
                        categories.map((c, i) => {
                          return (
                            <option value={c.name} key={c.id}>
                              {c.name}
                            </option>
                          )
                        })}
                    </select>
                  </Col>
                  <Col>
                    <FormControl
                      placeholder="Upload Image"
                      type="text"
                      onChange={handleChange("image")}
                      type="file"
                      className="bg-white mt-4"
                    ></FormControl>
                  </Col>
                  <div className="d-flex justify-content-center mb-3">
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-light text-dark"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default Upload
