import React from "react"
import { Col, Row, Container } from "react-bootstrap"

const Footer = () => {
  return (
    <div className="text-center py-2 bg-dark text-white footer ">
      <Container>
        <Row className="">
          <Col>Copyright &copy; 2020</Col>
          <Col>
            <i className="fab fa-facebook fa-2x ml-2"></i>
            <i className="fab fa-instagram fa-2x ml-2"></i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
