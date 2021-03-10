import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { albumPhotosShow, albumShow } from '../api'
import PhotoPreview from './PhotoPreview'

class AlbumShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      photos: []
    }
  }

  componentDidMount() {
    albumPhotosShow(this.props.token, this.props.id)
      .then(res => {
        this.setState({ photos: res.data.mediaItems })
      })
      .catch(err => {
        console.log(`albumPhotosShow error = `, err)
      })
    albumShow(this.props.token, this.props.id)
      .then(res => {
        this.setState({ title: res.data.title })
        console.log(this.state)
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
    // console.log(this.state)
    let photosJsx

    if (!this.state.photos) {
      photosJsx = <p>Loading photos...</p>
    } else {
      photosJsx = this.listPhotos()
    }

    return(
      <div className="album-show">
        <h3>{this.state.title}</h3>
        {photosJsx}
      </div>
    )
  }
}

export default withRouter(AlbumShow)
