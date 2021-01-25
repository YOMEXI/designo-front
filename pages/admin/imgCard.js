import Layout from "../../components/headers/Layout"

import { Container, Row, Card, Col, Button, Image } from "react-bootstrap"
import { deleteImg } from "./../../redux/imageReducer/imageActions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

//
export const ImgCard = ({ img, admin }) => {
  //
  const dispatch = useDispatch()
  const deleteIt = id => {
    dispatch(deleteImg(id))
  }
  //
  const images = useSelector(state => state.images)
  const { success, error, loading, succ } = images

  //
  useEffect(() => {}, [success, error, succ, loading])

  return (
    <Layout>
      {img && (
        <Container>
          <Row>
            <Col>
              <a href={`/admin/${img.id}`}>
                <Image
                  src={img.imageUrl}
                  alt="my img"
                  fluid="true"
                  style={{ height: "150px", width: "150px" }}
                />
              </a>
              <Container className="d-flex ">
                <Row>
                  <Col
                    className="mt-4   border-rounded"
                    lg={10}
                    md={10}
                    sm={9}
                    xs={9}
                  >
                    <Row>
                      Designer:::
                      <Col
                        className="bg-success text-white pills"
                        lg={10}
                        md={10}
                        sm={9}
                        xs={9}
                      >
                        {img.Users.map(x => x.firstname)}{" "}
                      </Col>
                      <Col
                        className="bg-success text-white"
                        lg={10}
                        md={10}
                        sm={9}
                        xs={9}
                      >
                        {img.Users.map(x => x.lastname)}
                      </Col>
                    </Row>
                  </Col>
                  {admin === "true" && (
                    <Col lg={3} xs={11} sm={11} md={10}>
                      <Button
                        size="sm"
                        className="bg-danger text-white mb-3"
                        onClick={() => deleteIt(img.id)}
                        style={{ cursor: "pointer", color: "black" }}
                      >
                        Delete
                      </Button>
                    </Col>
                  )}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )}
    </Layout>
  )
}

export default ImgCard
