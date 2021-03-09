import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Album extends Component {
  render() {
    const { coverPhotoBaseUrl, mediaItemsCount, productUrl, title } = this.props.album
    console.log(coverPhotoBaseUrl)

    return (
      <div>
        <img src={coverPhotoBaseUrl} alt={title} title={title}></img>
        <p>{title}</p>
      </div>
    )
  }
}

export default withRouter(Album)