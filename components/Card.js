import { Card, Row, Col, Container } from "react-bootstrap"
import Link from "next/link"
import { useRouter } from "next/router"
export const Cards = ({ images }) => {
  const router = useRouter()
  //

  const singleImg = id => {
    return router.push(`/images/${id}`)
  }

  return (
    <Container>
      <Row>
        {images.map((img, i) => {
          return (
            <Link href={``} key={i}>
              <Col
                lg={4}
                md={6}
                sm={10}
                xs={10}
                key={i}
                className="mt-4"
                key={i}
              >
                <Card key={i}>
                  <Card.Img
                    src={img.urls.regular}
                    variant="top"
                    img-fluid="true"
                  />
                  <Card.Text>Photographer :::{img.user.username}</Card.Text>
                  <Card.Text className=" d-flex justify-content-center">
                    <button
                      className="btn d-flex justify-content-center"
                      onClick={() => singleImg(img.id)}
                    >
                      View
                    </button>
                  </Card.Text>
                </Card>
              </Col>
            </Link>
          )
        })}
      </Row>
    </Container>
  )
}

export default Card
