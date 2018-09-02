import React, { Component } from "react"
import { connect } from "react-redux"
import { Header } from "../components/Header"
import { logOut } from "../actions/loginActions"

class HeadContainer extends Component {
  render() {
    const { toLoginOut, login } = this.props
    return <Header loginOut={toLoginOut} isLogin={login.isLogin} />
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toLoginOut: () => dispatch(logOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeadContainer)
