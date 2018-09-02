import React, { Component } from "react"
import { connect } from "react-redux"
import { getNews } from "../actions/newsActions"
import { News } from "../components/News"

class LoginContainer extends Component {
  componentDidMount() {
    this.props.getNewsAction()
  }

  render() {
    const { news } = this.props
    return (
      <div>
        <News data={news.data} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    news: store.news,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewsAction: () => dispatch(getNews()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
