import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import AuthHeader from "./../../components/headers/authHeader"
import axios from "axios"
import { ImgCard } from "./imgCard"
import Footer from "../../components/headers/Footer"
import Layout from "../../components/headers/Layout"

const viewCategory = () => {
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
        <AuthHeader />

        <Row>
          {images
            ? images.map((x, i) => (
                <Col lg={5} xs={9} sm={9} md={10} key={i}>
                  <ImgCard img={x} admin="true" />
                </Col>
              ))
            : "Loading"}
        </Row>
        <Footer />
      </Layout>
    </>
  )
}

export default viewCategory

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const { data } = await axios.get(`${process.env.API}/api/v1/image/getall`)
//   let images = data
//   // Pass data to the page via props
//   return { props: { images } }
// }
