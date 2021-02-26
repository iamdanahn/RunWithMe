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
