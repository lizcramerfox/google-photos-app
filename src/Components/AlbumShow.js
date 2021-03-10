import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { albumShow, mediaItemsIndex } from '../api'
import PhotoPreview from './PhotoPreview'

class AlbumShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    // albumShow(this.props.token, this.props.id)
    mediaItemsIndex(this.props.token)
      .then(res => {
        this.setState({ photos: res.data.mediaItems })
      })
      .catch(err => {
        console.log(`albumShow error = `, err)
      })
  }

  listPhotos = () => {
    let photos = []
    for (let i = 0; i < this.state.photos.length; i++) {
      photos.push(<PhotoPreview photo={this.state.photos[i]} key={this.state.photos[i].id} />)
    }
    return photos
  }

  render() {
    let photosJsx

    if (!this.state.photos) {
      photosJsx = <p>Loading photos...</p>
    } else {
      photosJsx = this.listPhotos()
    }

    return(
      <div className="album-show">{photosJsx}</div>
    )
  }
}

export default withRouter(AlbumShow)
