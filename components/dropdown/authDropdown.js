import { Dropdown } from "react-bootstrap"
import { isAuth } from "./../access/isAuth"

//

const authDropdown = () => {
  return (
    <Dropdown className="alltoggle ">
      <Dropdown.Toggle
        id="dropdown-basic"
        className="toggle bg-dark text-white"
      >
        check in
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {!isAuth() && (
          <>
            <Dropdown.Item href="/auth/signup">Sign Up</Dropdown.Item>
            <Dropdown.Item href="/auth/signin">Sign In</Dropdown.Item>
          </>
        )}
        {isAuth() && (
          <>
            <Dropdown.Item href="/images/uploadImages">
              Upload Image
            </Dropdown.Item>
          </>
        )}
        {isAuth() && isAuth().isAdmin !== false && (
          <Dropdown.Item href="/admin/adminPanel">Admin Panel</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default authDropdown
