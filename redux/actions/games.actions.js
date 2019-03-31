import { gamesConstants } from '../constants';
import { gamesService } from '../../services';

const getGamesForDate = (dateRequested) => {
  return async (dispatch) => {
    dispatch({
      type: gamesConstants.GET_GAMES_REQUEST
    })

    try {
      const response = await gamesService.getGamesForDate(dateRequested);
      const { date, games } = response.data;

      return dispatch({
        type: gamesConstants.GET_GAMES_SUCCESS,
        payload: { date, games }
      });
    } catch (error) {
      console.error(error); // TODO: Handle error
    }
  }
}

export {
  getGamesForDate
}