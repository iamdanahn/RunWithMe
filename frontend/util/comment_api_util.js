
// createComment
// fetchComment(s)
// deleteComment

export const fetchComments = (routeId) => {
  return $.ajax({
		url: `/api/comments`,
		method: `GET`,
		data: { comment: { commentable_id: routeId } },
	});
}

export const fetchComment = (commentId) => {
  return $.ajax({
		url: `/api/comments/${commentId}`,
		method: `GET`,
	});
}
export const createComment = (comment) => {
  return $.ajax({
		url: `/api/comments`,
		method: `POST`,
		data: { comment },
	});
}
export const deleteComment = (commentId) => {
  return $.ajax({
		url: `/api/comments/${commentId}`,
		method: `DELETE`,
	});
}