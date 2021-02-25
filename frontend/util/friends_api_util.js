export const fetchFriends = () => {
  debugger;
  return $.ajax({
    url: `api/friendships`,
    method: `GET`,
  });
};
