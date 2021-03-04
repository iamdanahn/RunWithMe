import { connect } from 'react-redux';
import { deleteRoute, fetchRoute } from '../../actions/route_actions'
import { fetchUser } from '../../actions/user_actions'
import { fetchComments, deleteComment } from "../../actions/comment_actions"
import RouteShow from './route_show'

const msp = (state, ownProps) => {
	const routeId = ownProps.match.params.routeId;
	const currentUserId = state.session.id;

	return {
		route: state.entities.routes[routeId],
		user: state.entities.user[currentUserId],
		sessionId: state.session.id,
		comments: Object.values(state.entities.comments),
	};
}

const mdp = dispatch => {
  return {
    deleteRoute: (route) => dispatch(deleteRoute(route)),
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchComments: (routeId) => dispatch(fetchComments(routeId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }
}

export default connect(msp, mdp)(RouteShow)