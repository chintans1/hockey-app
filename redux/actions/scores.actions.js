import { scoresConstants } from '../constants';
import { scoresService } from '../../services';

const getScores = (date) => {
  return async (dispatch) => {
    dispatch({
      type: scoresConstants.GET_SCORES_REQUEST
    })

    try {
      const response = await scoresService.getScores(date);
      const { scores } = response.data;

      return dispatch({
        type: scoresConstants.GET_SCORES_SUCCESS,
        payload: { date: scores.date, scores: scores.games }
      });
    } catch (error) {
      console.error(error); // TODO: Handle error
    }
  }
}

export {
  getScores
}