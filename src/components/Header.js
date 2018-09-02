import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export class Header extends React.Component {
  render() {
    const { loginOut, isLogin } = this.props
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Кинохи</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/news" style={{ color: "#77778c" }}>
                Новости
              </Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/profile" style={{ color: "#77778c" }}>
                Профиль
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            {isLogin ? (
              <NavItem eventKey={3} href="#" onClick={() => loginOut()}>
                Выйти
              </NavItem>
            ) : (
              <NavItem eventKey={3} href="#">
                <Link to="/login" style={{ color: "#77778c" }}>
                  Войти
                </Link>
              </NavItem>
            )}
          </Nav>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  loginOut: PropTypes.func.isRequired,
}

export default Header
