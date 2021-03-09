import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import photoIndex from '../api'

class PhotoIndex extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    photoIndex(this.props.token)
      .then(res => {
        console.log(`res = `, res)
        this.setState({ photos: res })
      })
      .catch(err => {
        console.log(`err = `, err)
      })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Index</h2>
        <p>{this.state.photos}</p>
      </div>
    )
  }
}

export default withRouter(PhotoIndex)