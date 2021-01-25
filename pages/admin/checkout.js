import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { isAuth } from "./../../components/access/isAuth"
import { PayPalButton } from "react-paypal-button-v2"
import Layout from "../../components/headers/Layout"
import AuthHeader from "./../../components/headers/authHeader"
import { Loader } from "./../../components/alerts/alerts"
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap"
import Footer from "../../components/headers/Footer"

//

const checkout = () => {
  const router = useRouter()
  const [sdk, setsdk] = useState(false)

  const [image, setimage] = useState("")
  const [img, setimg] = useState("")

  useEffect(() => {
    const addPayalScripts = async () => {
      const { data: clientId } = await axios.get(
        `${process.env.API}/api/paypal`
      )
      console.log(clientId)
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setsdk(true)
      }
      document.body.appendChild(script)
    }

    addPayalScripts()
    setimg(JSON.parse(localStorage.getItem("logo")))
  }, [])

  const success = async ImageId => {
    console.log(ImageId)
    const { data } = await axios.post(
      `${process.env.API}/api/v1/image/pay`,
      {
        ImageId,
      },
      {
        headers: {
          Authorization: `Bearer ${isAuth().token}`,
        },
      }
    )
    router.push(`/admin/${ImageId}`)
  }
  return (
    <Layout>
      <AuthHeader />
      {img ? (
        <Container>
          <Row>
            {img.map((img, x) => (
              <Col xs={10} sm={10} lg={7} md={7}>
                <Col>
                  <Col lg={8} sm={10} xs={10} md={10}>
                    <div>
                      <Card.Img src={img.imageUrl} className="mt-2" />
                    </div>
                  </Col>

                  <Container>
                    <Card.Text
                      lg={5}
                      md={5}
                      sm={5}
                      xs={5}
                      className="mb-2 bg-success text-white"
                    >
                      Description:::{img.description}
                    </Card.Text>
                    <Card.Text lg={5} md={5} sm={5} xs={5} className="mb-2">
                      Category:::{img.category}
                    </Card.Text>
                  </Container>
                </Col>
              </Col>
            ))}

            <Col sm={10} xs={10} lg={4} md={9}>
              {isAuth() && (
                <PayPalButton
                  amount="90"
                  onSuccess={() => success(img.map((x, i) => x.id)[0])}
                ></PayPalButton>
              )}
              {!isAuth() && (
                <Col>
                  <h3 className="bg-dark text-white text-center">
                    Please Login To Pay Using PayPal
                  </h3>
                </Col>
              )}
            </Col>
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
      <Footer />
    </Layout>
  )
}

export default checkout
