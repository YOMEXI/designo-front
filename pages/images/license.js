import React from "react"
import Layout from "../../components/headers/Layout"
import AuthHeader from "./../../components/headers/authHeader"
import Footer from "../../components/headers/Footer"
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap"

//

const license = () => {
  return (
    <Layout>
      <AuthHeader />
      <Container>
        <Row className="d-flex justify-content-center align-items-center bg-white text-dark my-3 font-2">
          <Col>About Us</Col>
          <Col>License</Col>
          <Col>FAQ</Col>
        </Row>
      </Container>
      <Row>
        <Col className="license"></Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center bg-white text-dark mt-2 mb-3 font-2">
          <h1>What is allowed?</h1>
        </Col>
      </Row>
      <Row>
        <Container className="font-2">
          {" "}
          <Row>
            <Col lg={4} sm={6} xs={10} sm={9}>
              <Row>
                <Col lg={3} className="mt-1">
                  <i className="fas fa-check " style={{ color: "green" }}></i>
                </Col>
                <Col lg={8}>
                  {" "}
                  All photos on the Sites are free to use for personal
                  activities.
                </Col>
              </Row>
            </Col>
            <Col lg={4} sm={6} xs={10} sm={9}>
              <Row>
                <Col lg={3} className="mt-1">
                  <i className="fas fa-check " style={{ color: "green" }}></i>
                </Col>
                <Col lg={8}>
                  {" "}
                  Attribution is not required. Giving credit to the photographer
                  or Pexels is not necessary but always appreciated.
                </Col>
              </Row>
            </Col>
            <Col lg={4} sm={6} xs={10} sm={9}>
              <Row>
                <Col lg={3} className="mt-1">
                  <i className="fas fa-check " style={{ color: "green" }}></i>
                </Col>
                <Col lg={8}> Inspiration for this site is pexels</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>
      <Footer />
    </Layout>
  )
}

export default license
