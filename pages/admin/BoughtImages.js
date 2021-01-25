import { useEffect, useState, useCallback } from "react"
import React from "react"
import Footer from "../../components/headers/Footer"

import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { isAuth } from "./../../components/access/isAuth"
import axios from "axios"

import Layout from "../../components/headers/Layout"
import Authheader from "../../components/headers/authHeader"
import { ImgCard } from "./../admin/imgCard"
import { Loader } from "./../../components/alerts/alerts"

const BoughtImages = () => {
  const [images, setimages] = useState("")

  useEffect(() => {
    const img = async () => {
      const { data } = await axios.get(
        `${process.env.API}/api/v1/image/myimg`,
        {
          headers: {
            Authorization: `Bearer ${isAuth().token}`,
          },
        }
      )
      console.log(data)
      setimages(data)
    }

    img()
  }, [])

  return (
    <>
      <Layout>
        <Authheader />
        <h2 className="d-flex justify-content-center align-items-center">
          My Purchases
        </h2>
        <Container>
          <Row className="mt-5">
            {images ? (
              <>
                <Col lg={6} xs={11} sm={11} md={5}>
                  <a href={`/admin/${images.id}`}>
                    <Col lg={4} xs={11} sm={11} md={11}>
                      <Card.Img src={images.imageUrl} admin="false" />
                    </Col>
                  </a>
                  <Col>Description:::{images.description}</Col>
                  <Col>Category:::{images.category}</Col>
                </Col>
              </>
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <Loader />
              </div>
            )}
          </Row>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export default BoughtImages

//

//
