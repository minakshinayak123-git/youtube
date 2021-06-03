import axios from 'axios'
const KEY = 'AIzaSyDEAtfls3xfLEyrPQLuMWnGCNrzMjbci2s'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 25,
    key: KEY,
  },
})
