import React, { Component } from "react"
import { connect } from "react-redux"
import { Login } from "../components/Login"
import { loginAction } from "../actions/loginActions"

class LoginContainer extends Component {
  render() {
    const { toLogin, login } = this.props
    return (
      <div>
        <Login login={toLogin} error={login.error} isLogin={login.isLogin} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toLogin: (email, password) => dispatch(loginAction(email, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
