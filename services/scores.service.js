import axios from 'axios';

// TODO: Move to better location (environment variable?)
const baseUrl = 'http://192.168.0.19:3000/v1'

const getScores = (date) =>
  axios.get(`${baseUrl}/scores`, {
          params: {
            date
          }
        })
       .then((response) => response)
       .catch((error) => console.error(error)) // TODO: Handle error

export {
  getScores
}