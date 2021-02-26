import { RECEIVE_FRIEND_REQ } from "../actions/friend_actions"

const friendRequestReducer = (state = [], action) => {
  Object.freeze(state)
  const { friendReq } = action

  switch (action.type) {
    case RECEIVE_FRIEND_REQ:
      return friendReq
    default:
      return state
  }
}

export default friendRequestReducer
