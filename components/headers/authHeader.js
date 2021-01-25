import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { isAuth, logout } from "./../access/isAuth"

const authheader = () => {
  return (
    <>
      <Navbar expand="lg mb-3">
        <Navbar.Brand href="/" className="bg-light headerTop">
          <i className="fab fa-product-hunt fa-2x "></i>
        </Navbar.Brand>
        <div className="mr-auto tex-dark headerTop pt-2" href="/">
          Designo
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light headerTop"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="ml-auto tex-dark headerTop"
        >
          <Nav className="ml-auto  ">
            <Container className="mr-3">
              {" "}
              <NavDropdown
                title="Check in"
                id="basic-nav-dropdown "
                style={{ color: "white" }}
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
    </>
  )
}

export default authheader
