import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_actions"

const commentsReducer = (state = {}, action) => {
  Object.freeze(state)

  const { comment, comments, commentId } = action
	debugger;
  switch (action.type) {
		case RECEIVE_COMMENTS:
			return comments;
		case RECEIVE_COMMENT:
			return Object.assign({}, state, { [comment.id]: comment });
		// case RECEIVE_ROUTE:
		// 	return
		case REMOVE_COMMENT:
			const nextState = Object.assign({}, state);
			delete nextState[commentId];
			return nextState;
		default:
			return state;
	}
}

export default commentsReducer
