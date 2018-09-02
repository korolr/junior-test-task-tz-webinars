import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import PrivateRoute from "../containers/PrivateRoute"
import ProfileContainer from "../containers/ProfileContainer"
import LoginContainer from "../containers/LoginContainer"
import HeaderContainer from "../containers/HeaderContainer"
import NewsContainer from "../containers/NewsContainer"
import Home from "./Home"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={NewsContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
