import React from "react"
import {
  Grid,
  Row,
  Form,
  FormGroup,
  Col,
  FormControl,
  Button,
} from "react-bootstrap"
import PropTypes from "prop-types"
import history from "../history"

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "" }
  }

  onEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  onPasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = event => {
    this.props.login(this.state.email, this.state.password)
    this.setState({ password: "" })
    event.preventDefault()
  }

  componentDidUpdate() {
    if (this.props.isLogin) {
      history.push(`/`)
    }
  }

  componentDidMount() {
    if (this.props.isLogin) {
      history.push(`/`)
    }
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={1}>Email</Col>
              <Col sm={3}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col sm={1}>Password</Col>
              <Col sm={3}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                />
              </Col>
            </FormGroup>

            {this.props.error ? (
              <h3 style={{ color: "red" }}>{this.props.error}</h3>
            ) : null}
            {this.state.password && this.state.email ? (
              <FormGroup>
                <Col smOffset={1} sm={3}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            ) : null}
          </Form>
        </Row>
      </Grid>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
}

export default Login
