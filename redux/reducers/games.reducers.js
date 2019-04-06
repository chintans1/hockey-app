import { gamesConstants } from "../constants";

const initialState = {
  currentGame: null,
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

    case gamesConstants.GET_SINGLE_GAME_REQUEST:
      return {
        ...state,
        currentGame: null
      }
    case gamesConstants.GET_SINGLE_GAME_SUCCESS:
      return {
        ...state,
        currentGame: action.payload.game
      }
    case gamesConstants.GET_SINGLE_GAME_FAILURE:
      // TODO: Error handling
      return {
        ...state,
        currentGame: null
      }
    default:
      return state;
  }
}

export default reducer;