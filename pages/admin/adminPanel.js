import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import AuthHeader from "./../../components/headers/authHeader"
import Layout from "../../components/headers/Layout"
import withAdmin from "./../../components/access/withAdmin"
import Footer from "../../components/headers/Footer"
//

const adminPanel = () => {
  return (
    <Layout>
      <AuthHeader />
      <Container>
        <Row className="mt-5">
          <Col>
            <Button
              className="bg-primary text-white"
              href={`/admin/createCategory`}
            >
              Create Category
            </Button>
          </Col>
          <Col>
            <Button
              className="bg-primary text-white"
              href={`/admin/viewImages`}
            >
              View Logos
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default adminPanel
