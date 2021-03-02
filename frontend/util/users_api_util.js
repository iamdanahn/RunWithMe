export const fetchFriends = () => {
  debugger
  return $.ajax({
    url: `api/friendships`,
    method: `GET`,
  })
}

export const findFriends = (criteria) => {
  debugger
  return $.ajax({
    url: `api/users`,
    method: `GET`,
    data: {
      user: criteria,
    },
  })
}

export const sendFriendReq = (request) => {
  debugger
  return $.ajax({
    url: `api/friend_requests`,
    method: `POST`,
    data: {
      friend_request: request,
    },
  })
}

export const addFriend = (friendId) => {
  return $.ajax({
    url: `api/friendships`,
    method: `POST`,
    data: {
      friends: friendId,
    },
  })
}