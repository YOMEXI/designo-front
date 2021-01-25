import { useEffect, useState } from "react"

import { useRouter } from "next/router"

import axios from "axios"

import Footer from "../../components/headers/Footer"
import Layout from "../../components/headers/Layout"
import AuthHeader from "./../../components/headers/authHeader"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap"

//
const oneImage = () => {
  const router = useRouter()
  const [img, setimg] = useState("")
  //
  const id = router.query.oneImage

  const images = async () => {
    if (id) {
      const { data } = await axios.get(
        `${process.env.API}/api/v1/image/getone/${id}`
      )
      console.log(data)
      localStorage.setItem("logo", JSON.stringify([data]))
      setimg(data)
    }
  }

  //

  useEffect(() => {
    images()

    //
  }, [router])

  //download functionality

  return (
    <Layout>
      <AuthHeader />
      <Container>
        <Row>
          <Col xs={10} sm={10} lg={7} md={7}>
            {" "}
            {img && (
              <Col>
                <Col lg={8} sm={10} xs={10} md={10}>
                  <div>
                    <Card.Img src={img.imageUrl} className="mt-2" />
                  </div>
                </Col>

                <Container>
                  <Card.Text lg={5} md={5} sm={5} xs={5} className="mb-2">
                    {img.description}
                  </Card.Text>
                  <Card.Text lg={5} md={5} sm={5} xs={5} className="mb-2">
                    Category:: {img.category}
                  </Card.Text>

                  {img.Users.map((x, i) => {
                    return (
                      <Row key={i}>
                        <Col
                          lg={4}
                          md={5}
                          sm={5}
                          xs={5}
                          className="mb-2 bg-success text-white mr-2"
                        >
                          {x.firstname}
                        </Col>
                        <Col
                          lg={4}
                          md={5}
                          sm={5}
                          xs={5}
                          className="mb-2 bg-success text-white"
                        >
                          {x.lastname}
                        </Col>
                      </Row>
                    )
                  })}
                </Container>
              </Col>
            )}
          </Col>
          <Col xs={9} sm={9} lg={4} md={7}>
            {!img.paidFor && (
              <ListGroup>
                <ListGroupItem>
                  <Button
                    size="sm"
                    onClick={() => {
                      return router.push("/admin/checkout")
                    }}
                  >
                    CheckOut
                  </Button>
                </ListGroupItem>
              </ListGroup>
            )}

            {!img.paidFor ? (
              <Col className="bg-success text-white mt-1">Availabe</Col>
            ) : (
              <Col xs={10} sm={10} className="bg-secondary text-white mt-1">
                Bought
              </Col>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}

export default oneImage
