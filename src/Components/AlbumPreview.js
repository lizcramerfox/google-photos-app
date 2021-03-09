import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AlbumPreview extends Component {
  render() {
    const { coverPhotoBaseUrl, mediaItemsCount, title } = this.props.album

    return (
      <div className="album-preview">
        <img src={coverPhotoBaseUrl} alt={title} title={title}></img>
        <h4>{title}</h4>
        <p>{mediaItemsCount} Photos</p>
      </div>
    )
  }
}

export default withRouter(AlbumPreview)