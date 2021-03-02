import { RECEIVE_CURRENT_USER } from "../actions/session_actions"

const userReducer = (state = {}, action) => {
  Object.freeze(state)
  const { currentUser } = action

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [currentUser.id]: currentUser })
    default:
      return state
  }
}

export default userReducer
