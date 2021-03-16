import {
	RECEIVE_COMMENTS,
	RECEIVE_COMMENT,
	REMOVE_COMMENT,
	CLEAR_COMMENTS,
} from "../actions/comment_actions";
import { RECEIVE_ROUTES } from "../actions/route_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const commentsReducer = (state = {}, action) => {
	Object.freeze(state);

	const { comment, comments, commentId, routesInfo } = action;
	switch (action.type) {
		case RECEIVE_COMMENTS:
			return comments;
		case RECEIVE_COMMENT:
			return Object.assign({}, state, { [comment.id]: comment });
		case RECEIVE_ROUTES:
			if (Object.keys(routesInfo).length) {
				return routesInfo.route_comments;
			} else {
				return state;
			}
		case REMOVE_COMMENT:
			const nextState = Object.assign({}, state);
			delete nextState[commentId];
			return nextState;
		case LOGOUT_CURRENT_USER:
		case CLEAR_COMMENTS:
			return {};
		default:
			return state;
	}
}

export default commentsReducer
