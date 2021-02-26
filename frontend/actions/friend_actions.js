import * as FriendsAPIUtil from "../util/users_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";

const receiveFriends = (friends) => {
  debugger;
  return {
    type: RECEIVE_FRIENDS,
    friends,
  };
};

const receivePeople = (people) => {
  debugger;
  return {
    type: RECEIVE_PEOPLE,
    people,
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

export const findFriends = (criteria) => {
  return (dispatch) => {
    debugger;
    return FriendsAPIUtil.findFriends(criteria).then((people) => {
      debugger;
      return dispatch(receivePeople(people));
    });
  };
};