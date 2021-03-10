import axios from 'axios'

export const albumIndex = token => {
  return axios({
    url: `https://photoslibrary.googleapis.com/v1/albums`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

export const mediaItemsIndex = (token) => {
  return axios({
    url: `https://photoslibrary.googleapis.com/v1/mediaItems/`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })  
}