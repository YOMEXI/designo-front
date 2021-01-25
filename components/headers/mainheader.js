import { Navbar, Nav, Row, Col, Container, NavDropdown } from "react-bootstrap"
import SearchBox from "./../searchBox"
import AuthDropdown from "./../dropdown/authDropdown"
import { isAuth, logout } from "./../access/isAuth"

const header = () => {
  return (
    <>
      <div className="header mb-4">
        <Navbar expand="lg">
          <Navbar.Brand href="/" className="bg-light headerTop">
            <i className="fab fa-product-hunt fa-2x "></i>
          </Navbar.Brand>
          <div className="mr-auto text-white headerTop pt-2">
            <h4> Designo</h4>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light headerTop"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="ml-auto text-white headerTop"
          >
            <Nav className="ml-auto text-white">
              <Nav.Link className="text-white" href="/images/license">
                <h5>License</h5>
              </Nav.Link>
              {isAuth() && (
                <>
                  <Nav.Link
                    className=" text-white"
                    href={"/images/uploadImages"}
                  >
                    <h5>Upload</h5>
                  </Nav.Link>
                </>
              )}
              <Container className="mr-3">
                {" "}
                <NavDropdown
                  title="Check in"
                  id="basic-nav-dropdown"
                  className="bg-white text-dark"
                >
                  {!isAuth() && (
                    <>
                      <NavDropdown.Item href="/auth/signup">
                        Sign Up
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/auth/signin">
                        Sign In
                      </NavDropdown.Item>
                    </>
                  )}
                  {isAuth() && (
                    <>
                      <NavDropdown.Item href="/images/uploadImages">
                        Upload Logo
                      </NavDropdown.Item>
                      <NavDropdown.Item href={`/auth/details`}>
                        My Details
                      </NavDropdown.Item>
                      <NavDropdown.Item href={`/admin/BoughtImages`}>
                        Logos Bought
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={logout}>
                        Log Out
                      </NavDropdown.Item>
                    </>
                  )}
                  {isAuth() && isAuth().isAdmin !== false && (
                    <NavDropdown.Item href="/admin/adminPanel">
                      Admin Panel
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className=" headerCenter">
          <Row>
            <Col lg={10} sm={10} xs={10} md={10}>
              <h2 className="text-white">Buy and Sell Quality Logos</h2>
            </Col>
            <SearchBox />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default header
