import * as FriendsAPIUtil from "../util/friends_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

const receiveFriends = (friends) => {
  debugger;
  return {
    type: RECEIVE_FRIENDS,
    friends,
  };
};

export const fetchFriends = () => {
  return (dispatch) => {
    debugger;
    return FriendsAPIUtil.fetchFriends().then((friends) => {
      debugger;
      return dispatch(receiveFriends(friends));
    });
  };
};
