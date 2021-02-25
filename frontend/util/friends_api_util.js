export const fetchFriends = () => {
  debugger;
  return $.ajax({
    url: `api/friends`,
    method: `GET`,
  });
};
