import * as FriendsAPIUtil from "../util/friends_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";

const receiveFriends = (friends) => {
  return {
    type: RECEIVE_FRIENDS,
    friends,
  };
};

export const fetchFriends = () => {
  return (dispatch) => {
    return FriendsAPIUtil.fetchFriends().then((friends) => {
      return dispatch(receiveFriends(friends));
    });
  };
};
