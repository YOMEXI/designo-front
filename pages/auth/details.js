import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Layout from "../../components/headers/Layout"
import { isAuth } from "./../../components/access/isAuth"
import AuthHeader from "./../../components/headers/authHeader"
import axios from "axios"
import { useRouter } from "next/router"
import { Loader } from "../../components/alerts/alerts"
import Footer from "../../components/headers/Footer"
//

const details = () => {
  const router = useRouter()

  const [user, setuser] = useState("")

  useEffect(() => {
    const userDetails = async () => {
      const { data } = await axios.get(
        `${process.env.API}/api/v1/auth/userdetails`,
        {
          headers: {
            Authorization: `Bearer ${isAuth().token}`,
          },
        }
      )
      setuser(data)
      console.log(data, user)
    }
    console.log(user)
    userDetails()
  }, [])
  return (
    <Layout>
      <>
        <AuthHeader />
        {user ? (
          <Container>
            {user.map((user, i) => (
              <Row
                key={i}
                className="d-flex justify-content-center align-items-center pt-5"
              >
                <Card className="bg-dark text-white font-1 " lg={6}>
                  <Col className="my-1">
                    FullName : {user.firstname} {user.lastname}
                  </Col>

                  <Col className="my-1">Email: {user.email}</Col>
                  <Col className="my-1">Role: {user.role}</Col>
                </Card>
              </Row>
            ))}
          </Container>
        ) : (
          <Col>{<Loader />}</Col>
        )}
        <Footer />
      </>
    </Layout>
  )
}

export default details
