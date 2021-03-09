import axios from 'axios'

export const photoIndex = token => {
  return axios({
    url: 'https://photoslibrary.googleapis.com/v1/albums',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export default (
  photoIndex
)