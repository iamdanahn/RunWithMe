import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_USER } from "../actions/user_actions"

const userReducer = (state = {}, action) => {
  Object.freeze(state)
  const { user, currentUser } = action

   
  switch (action.type) {
    case RECEIVE_USER:
       
      return user
    case RECEIVE_CURRENT_USER:
       
      return Object.assign({}, state, { [currentUser.id]: currentUser })
    default:
       
      return state
  }
}

export default userReducer
