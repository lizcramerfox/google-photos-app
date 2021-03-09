import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Album extends Component {
  render() {
    const { coverPhotoBaseUrl, mediaItemsCount, title } = this.props.album

    return (
      <div className="album-cover">
        <img src={coverPhotoBaseUrl} alt={title} title={title}></img>
        <h4>{title}</h4>
        <p>{mediaItemsCount} Photos</p>
      </div>
    )
  }
}

export default withRouter(Album)