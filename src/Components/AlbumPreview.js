import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class AlbumPreview extends Component {
  render() {
    const { coverPhotoBaseUrl, mediaItemsCount, title, id } = this.props.album

    return (
      <Link to={`/albums/${id}`} className="album-preview">
        <img src={coverPhotoBaseUrl} alt={title} title={title}></img>
        <h4>{title}</h4>
        <p>{mediaItemsCount} Photos</p>
      </Link>
    )
  }
}

export default withRouter(AlbumPreview)