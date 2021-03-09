import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import photoIndex from '../api'
import AlbumPreview from './AlbumPreview'

class PhotoIndex extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      albums: [],
    }
  }

  componentDidMount() {
    photoIndex(this.props.token)
      .then(res => {
        this.setState({ albums: res.data.albums })
      })
      .catch(err => {
        console.log(`err = `, err)
      })
  }

  listAlbums = () => {
    let albums = []
    for (let i = 0; i < this.state.albums.length; i++) {
      albums.push(<AlbumPreview album={this.state.albums[i]} id={this.state.albums[i].id} />)
    }
    return albums
  }
  
  render() {
    let indexJsx

    if (!this.state.albums) {
      indexJsx = <p>Loading albums...</p>
    } else {
      indexJsx = this.listAlbums()
    }

    return (
      <div>
        <h2>Index</h2>
        <div className="index-albums">{indexJsx}</div>
      </div>
    )
  }
}

export default withRouter(PhotoIndex)