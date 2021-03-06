// Regular friending section
//
export const fetchFriends = () => {
	return $.ajax({
		url: `api/friendships`,
		method: `GET`,
	});
}

export const findFriends = (criteria) => {
	return $.ajax({
		url: `api/users`,
		method: `GET`,
		data: {
			user: criteria,
		},
	});
}

export const addFriend = (friendId) => {
  return $.ajax({
    url: `api/friendships`,
    method: `POST`,
    data: {
      friends: { friend_id: friendId },
    },
  })
}

export const unFriend = (friendId) => {
  return $.ajax({
    url: `api/friendships/${friendId}`,
    method: `DELETE`,
  })
}

//Friend request section
//
export const sendFriendReq = (request) => {
	return $.ajax({
		url: `api/friend_requests`,
		method: `POST`,
		data: {
			friend_request: request,
		},
	});
}
