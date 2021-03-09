import axios from 'axios'

const albumIndex = token => {
  return axios({
    url: 'https://photoslibrary.googleapis.com/v1/albums',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export default (
  albumIndex
)