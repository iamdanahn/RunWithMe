import * as FriendsAPIUtil from "../util/users_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const RECEIVE_FRIEND_REQ = "RECEIVE_FRIEND_REQ" 
export const CLEAR_PEOPLE = "CLEAR_PEOPLE"

// sets up friends in redux
const receiveFriends = (friends) => {
  debugger
  return {
    type: RECEIVE_FRIENDS,
    friends,
  }
}

// sets up searched users in find friends
const receivePeople = (people) => {
  debugger
  return {
    type: RECEIVE_PEOPLE,
    people,
  }
}

const receiveFriendReq = (friendReq) => {
  debugger
  return {
    type: RECEIVE_FRIEND_REQ,
    friendReq,
  }
}

export const clearPeople = () => {
  debugger
  return {
    type: CLEAR_PEOPLE,
  }
}

// finds user's friends from Back end
export const fetchFriends = () => {
  return (dispatch) => {
    debugger
    return FriendsAPIUtil.fetchFriends().then((friends) => {
      debugger
      return dispatch(receiveFriends(friends))
    })
  }
}

// finds people from Back end
export const findFriends = (criteria) => {
  return (dispatch) => {
    debugger
    return FriendsAPIUtil.findFriends(criteria).then((people) => {
      debugger
      return dispatch(receivePeople(people))
    })
  }
}

// Creates friend request in Back end
export const sendFriendReq = (request) => {
  return (dispatch) => {
    return FriendsAPIUtil.sendFriendReq(request).then((friendReq) => {
      return dispatch(receiveFriendReq(friendReq))
    })
  }
}

// Adds friend w/o request (used for demo purposes)
export const addFriend = (friendId) => {
  return dispatch => {
    return FriendsAPIUtil.addFriend(friendId).then((friends) => {
      return dispatch(receiveFriends(friends))
    })
  }
}