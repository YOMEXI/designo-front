import { useEffect, useState, useCallback } from "react"
import React from "react"
import Footer from "../components/headers/Footer"
import Carousel from "./../components/carousel"

import { Container, Row, Col, Button } from "react-bootstrap"
import axios from "axios"

import Layout from "../components/headers/Layout"
import Mainheader from "../components/headers/mainheader"
import { ImgCard } from "./admin/imgCard"
import { Loader } from "./../components/alerts/alerts"

//

//
const index = () => {
  //

  const [images, setimages] = useState([])

  useEffect(() => {
    const img = async () => {
      const { data } = await axios.get(`${process.env.API}/api/v1/image/getall`)

      setimages(data)
    }

    img()
  }, [])

  return (
    <>
      <Layout>
        <Mainheader />

        <div className="d-flex justify-content-center mb-3">
          <Carousel />
        </div>

        <h2 className="d-flex justify-content-center align-items-center">
          Our Top Picks
        </h2>
        <Row>
          {images ? (
            images.map((x, i) => (
              <Col lg={3} xs={6} sm={6} md={5} key={i}>
                <ImgCard img={x} admin="false" />
              </Col>
            ))
          ) : (
            <Loader />
          )}
        </Row>
        <Footer />
      </Layout>
    </>
  )
}

export default React.memo(index)
