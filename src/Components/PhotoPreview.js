import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class PhotoPreview extends Component {
  render() {
    const { baseUrl, title } = this.props.photo
    
    return (
      <div className="photo">
        <h5>{title}</h5>
        <img src={baseUrl} alt={title} title={title}></img>
      </div>
    )
  }
}

export default withRouter(PhotoPreview)