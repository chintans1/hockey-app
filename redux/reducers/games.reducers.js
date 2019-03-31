import { gamesConstants } from "../constants";

const initialState = {
  games: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case gamesConstants.GET_GAMES_REQUEST:
      return {
        ...state,
        games: []
      }
    case gamesConstants.GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload.games
      }
    case gamesConstants.GET_GAMES_FAILURE:
      // TODO: Error handling
      return {
        ...state,
        games: []
      }
    default:
      return state;
  }
}

export default reducer;