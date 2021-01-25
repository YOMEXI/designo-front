import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import axios from "axios"
import Router from "next/router"
import Footer from "../../components/headers/Footer"
import { ImgCard } from "./../admin/imgCard"
import Layout from "../../components/headers/Layout"
import Mainheader from "./../../components/headers/mainheader"

const search = () => {
  const [images, setimages] = useState([])

  const img = async () => {
    const { data } = await axios.post(
      `${process.env.API}/api/v1/image/search?keyword=${Router.query.search}`
    )
    console.log(data)
    setimages(data)
  }

  //
  useEffect(() => {
    img()
  }, [])

  return (
    <Layout>
      <Mainheader />
      <h2 className="d-flex justify-content-center align-items-center mt-4">
        Our Top Picks
      </h2>
      <Row>
        {images ? (
          images.map((x, i) => (
            <Col lg={4} xs={11} sm={11} md={5} key={i}>
              <ImgCard img={x} admin="false" />
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>
      <Footer />
    </Layout>
  )
}

export default search
