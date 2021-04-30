import { combineReducers } from "redux";
import commentErrorsReducer from "./comments_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

export default combineReducers({
	session: sessionErrorsReducer,
	comments: commentErrorsReducer,
});


