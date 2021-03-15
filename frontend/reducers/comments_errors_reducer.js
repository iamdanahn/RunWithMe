import {
	RECEIVE_COMMENT_ERRORS,
	RECEIVE_COMMENT,
	CLEAR_ERRORS,
} from "../actions/comment_actions";

export default (state = [], action) => {
	Object.freeze(state);

	debugger;
	switch (action.type) {
		case RECEIVE_COMMENT_ERRORS:
			return action.errors;
		case RECEIVE_COMMENT:
		case CLEAR_ERRORS:
			return [];
		default:
			return state;
	}
};
