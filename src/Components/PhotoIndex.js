import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import photoIndex from '../api'

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
    let titles = []
    for (let i = 0; i < this.state.albums.length; i++) {
      titles.push(this.state.albums[i].title)
    }
    return <h3>{titles}</h3>
  }
  
  render() {
    console.log(this.state.albums)
    return (
      <div>
        <h2>Index</h2>
        <div>{this.listAlbums()}</div>
      </div>
    )
  }
}

export default withRouter(PhotoIndex)