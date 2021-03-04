import * as FriendsAPIUtil from "../util/users_api_util";

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_PEOPLE = "RECEIVE_PEOPLE";
export const RECEIVE_FRIEND_REQ = "RECEIVE_FRIEND_REQ" 
export const CLEAR_PEOPLE = "CLEAR_PEOPLE"

// sets up friends in redux
const receiveFriends = (friends) => {
   
  return {
    type: RECEIVE_FRIENDS,
    friends,
  }
}

// sets up searched users in find friends
const receivePeople = (people) => {
   
  return {
    type: RECEIVE_PEOPLE,
    people,
  }
}

const receiveFriendReq = (friendReq) => {
   
  return {
    type: RECEIVE_FRIEND_REQ,
    friendReq,
  }
}

export const clearPeople = () => {
   
  return {
    type: CLEAR_PEOPLE,
  }
}

// finds user's friends from Back end
export const fetchFriends = () => {
  return (dispatch) => {
     
    return FriendsAPIUtil.fetchFriends().then((friends) => {
       
      return dispatch(receiveFriends(friends))
    })
  }
}

// finds people from Back end
export const findFriends = (criteria) => {
  return (dispatch) => {
     
    return FriendsAPIUtil.findFriends(criteria).then((people) => {
       
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

export const unFriend = (friendId) => {
  return (dispatch) => {
    return FriendsAPIUtil.unFriend(friendId).then((friends) => {
      return dispatch(receiveFriends(friends))
    })
  }
}