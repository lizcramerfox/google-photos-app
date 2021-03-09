import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { albumShow } from '../api'

class AlbumShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    albumShow(this.props.token, this.props.id)
      .then(res => {
        this.setState({ photos: res.data.mediaItems })
      })
      .catch(err => {
        console.log(`albumShow error = `, err)
      })
  }

  

  render() {
    console.log(this.state.photos)
    return(
      <p>AlbumShow</p>
    )
  }
}

export default withRouter(AlbumShow)
