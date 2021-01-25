import React from "react"
import { Carousel, Image, Container, Row, Col } from "react-bootstrap"

const Carousels = () => {
  return (
    <>
      <Container className="carousel mt-5">
        <Row>
          <Col lg={8} md={8} sm={10} xs={10}>
            <h2 className=" d-flex ml-5 mt-5 text-center justify-content-center">
              Coming Soon
            </h2>
          </Col>

          <Col lg={8} md={8} sm={10} xs={10}>
            <Carousel className="my-5 bg-dark py-5 px-5">
              <Carousel.Item>
                <Image
                  className="  "
                  src={`https://cdn3.vectorstock.com/i/1000x1000/33/02/electricity-logo-electric-logo-and-icon-design-vector-28113302.jpg`}
                  alt="First slide"
                  fluid="true"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  fluid="true"
                  className=" "
                  src={`https://image.shutterstock.com/image-vector/hot-spicy-chicken-logo-design-260nw-1481550134.jpg`}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Carousels
