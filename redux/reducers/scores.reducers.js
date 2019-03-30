import { scoresConstants } from "../constants";

const initialState = {
  scores: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case scoresConstants.GET_SCORES_REQUEST:
      return {
        ...state,
        scores: []
      }
    case scoresConstants.GET_SCORES_SUCCESS:
      return {
        ...state,
        scores: action.payload.scores
      }
    case scoresConstants.GET_SCORES_FAILURE:
      // TODO: Error handling
      return {
        ...state,
        scores: []
      }
    default:
      return state;
  }
}

export default reducer;