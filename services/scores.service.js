import axios from 'axios';
import { API_BASE_URL } from 'react-native-dotenv';

const apiUrl = `${API_BASE_URL}/v1`

const getScores = (date) =>
  axios.get(`${apiUrl}/scores`, {
          params: {
            date
          }
        })
       .then((response) => response)
       .catch((error) => console.error(error)) // TODO: Handle error

export {
  getScores
}