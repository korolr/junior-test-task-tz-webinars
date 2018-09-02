import React, { Component } from "react"
import { connect } from "react-redux"
import { Profile } from "../components/Profile"
import { profileAction } from "../actions/profileActions"

class LoginContainer extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.login.id)
  }

  render() {
    const { profile } = this.props
    return (
      <div>
        <Profile profileData={profile} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    login: store.login,
    profile: store.profile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: id => dispatch(profileAction(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
