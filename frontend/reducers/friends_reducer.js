import { RECEIVE_FRIENDS } from "../actions/friend_actions";

const FriendsReducer = (state = [], action) => {
  Object.freeze(state);

  const { friends } = action;

  switch (action.type) {
    case RECEIVE_FRIENDS:
      debugger;
      return friends;
    default:
      return state;
  }
};

export default FriendsReducer;
