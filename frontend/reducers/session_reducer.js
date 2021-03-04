import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

// maintains its own state and defaults as "user null"
const _nullUser = Object.freeze({
	currentUser: null,
}); 

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const { currentUser } = action;

  debugger;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return currentUser;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
}

export default sessionReducer