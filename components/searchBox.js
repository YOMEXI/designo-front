import { Button, Container, Form, FormControl, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useRouter } from "next/router"

const searchBox = () => {
  const router = useRouter()

  const [keyword, setkeyword] = useState("")

  const searchSubmit = () => {
    console.log("pppp")
    router.push(`/imgSearch/${keyword}`)
  }

  //
  return (
    <>
      <Container lg={10} sm={8} xs={10} md={10} className="my-3 ">
        <Form onSubmit={searchSubmit}>
          <Row className="ml-3">
            <Col lg={6} sm={10} xs={10} md={10} className="mb-2">
              <FormControl
                type="text"
                onChange={e => setkeyword(e.target.value)}
              ></FormControl>
            </Col>
            <Col lg={1} sm={3} xs={10} md={10} onClick={searchSubmit}>
              <i
                className="fas fa-search fa-2x bg-light searchBoxpy px-4 "
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default searchBox
