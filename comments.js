import {
  ADD_COMMENT,
  EDIT_COMMENT,
  REMOVE_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
} from "./actions";

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      },
      ...state]
    case EDIT_COMMENT:
      return state.map(comment => comment.id === action.id 
                       ? { id: comment.id, text: action.text } 
                       : comment)
    case REMOVE_COMMENT:
      return state.filter(comment => comment.id !== action.id);
    case THUMB_UP_COMMENT:
        return state.map(comment => comment.id === action.id
                        ? {id: comment.id, votes: comment.votes +1}
                        : comment);
    case THUMB_UP_COMMENT:
    return state.map(comment => comment.id === action.id
                    ? {id: comment.id, votes: comment.votes -1}
                    : comment);
    default:
      return state
  }
}

export default comments;