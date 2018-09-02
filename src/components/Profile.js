import React from "react"
import { Grid, Row } from "react-bootstrap"
import PropTypes from "prop-types"

export class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = { social: [] }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      social: [],
    })
    if (nextProps.profileData.data.social !== undefined) {
      nextProps.profileData.data.social.map(item => {
        var newelement = {}
        if (item.label === "vk") {
          newelement = {
            item: item.link,
            src: "./twitter-logo-silhouette.png",
          }
        } else if (item.label === "telegram") {
          newelement = {
            item: item.link,
            src: "./youtube-logo.png",
          }
        } else if (item.label === "web") {
          newelement = {
            item: item.link,
            src: "./youtube-logo.png",
          }
        } else if (item.label === "youtube") {
          newelement = {
            item: item.link,
            src: "./twitter-logo-silhouette.png",
          }
        } else if (item.label === "twitter") {
          newelement = {
            item: item.link,
            src: "./youtube-logo.png",
          }
        }
        this.setState(prevState => ({
          social: [...prevState.social, newelement],
        }))
      })
    }
  }

  componentDidMount() {}

  render() {
    const { profileData } = this.props
    return (
      <Grid>
        <Row className="show-grid">
          <p>Город: {profileData.data.city}</p>
          <br />
          <p>Знание языков:</p>
          {profileData.data.languages !== undefined
            ? profileData.data.languages.map(item => {
                return <p> + {item}</p>
              })
            : null}
          {this.state.social.map(item => {
            return (
              <a href={item.item} key={item.item}>
                <img src={item.src} style={{ height: "70px" }} />
              </a>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
}

export default Profile
