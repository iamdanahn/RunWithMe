export const fetchFriends = () => {
  return $.ajax({
    url: `api/friends`,
    method: `GET`,
  });
};
