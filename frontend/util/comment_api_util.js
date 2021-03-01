
// createComment
// fetchComment(s)
// deleteComment

export const fetchComments = (routeId) => {
  return $.ajax({
    url: `/api/comments`,
    method: `GET`,
    data: { comment: { commentable_id: routeId } },
    error: (err) => console.log(err),
  })
}

export const fetchComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: `GET`,
    error: (err) => console.log(err),
  })
}
export const createComment = (comment) => {
  return $.ajax({
    url: `/api/comments`,
    method: `POST`,
    data: { comment },
    error: (err) => console.log(err),
  })
}
export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: `DELETE`,
    error: (err) => console.log(err),
  })
}