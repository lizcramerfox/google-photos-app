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

export const albumShow = (token, id) => {
  return axios({
    url: `https://photoslibrary.googleapis.com/v1/mediaItems:search`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    data: {
      'albumId': id
    }
  })  
}