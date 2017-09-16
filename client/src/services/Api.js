import axios from 'axios'

export default () => {
  // This is used for interacting with a backend API
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
