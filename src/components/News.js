import React from "react"
import { Grid, Row } from "react-bootstrap"
import PropTypes from "prop-types"

export class News extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Grid>
        <Row className="show-grid">
          {data.map(item => {
            return (
              <div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <br />
              </div>
            )
          })}
        </Row>
      </Grid>
    )
  }
}

News.propTypes = {
  data: PropTypes.array.isRequired,
}

export default News
