import { connect } from 'react-redux';
import { deleteRoute, fetchRoute } from '../../actions/route_actions'
import { fetchUser } from '../../actions/user_actions'
import { fetchComments, deleteComment } from "../../actions/comment_actions"
import RouteShow from './route_show'

const msp = (state, ownProps) => {
	const routeId = ownProps.match.params.routeId;
	const currentUserId = state.session.currentUser.id;
	debugger;
	return {
		route: state.entities.routes,
		currentUser: state.session.currentUser,
		sessionId: currentUserId,
		comments: Object.values(state.entities.comments),
	};
}

const mdp = dispatch => {
	debugger;
  return {
    deleteRoute: (route) => dispatch(deleteRoute(route)),
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchComments: (routeId) => dispatch(fetchComments(routeId)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  }
}

export default connect(msp, mdp)(RouteShow)