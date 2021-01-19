import { 
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions'

// maintains its own state and defaults as "user null"
const _nullUser = Object.freeze({
  id: null
}) 

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  const { currentUser } = action;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: currentUser.id};
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
}

export default SessionReducer