import { Field, ErrorMessage } from "formik"
import { Container, Row, Col, Form } from "react-bootstrap"
import TextError from "./textError"

const FormikControl = ({ title, name, type, placeholder }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <Form.Group className=" .Group-container mt-3">
                <Col className=" forms">
                  <>
                    <div className="sign-in-form ">
                      <h2 className="title forms ">{title}</h2>
                      <div className="input-field ">
                        {type === "input" ? (
                          <i className="fas fa-user"></i>
                        ) : (
                          <i className="fas fa-lock"></i>
                        )}
                        <Field
                          id={name}
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          className="input form-group"
                        />
                        <ErrorMessage
                          name={name}
                          className="error"
                          component={TextError}
                        />
                      </div>
                    </div>
                  </>
                </Col>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormikControl
