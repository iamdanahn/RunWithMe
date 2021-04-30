import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	fetchRoutes,
	createRoute,
	updateRoute,
	clearRoutes,
} from "../../actions/route_actions";
import RouteIndex from './route_index';

const msp = (state, ownProps) => {
	return {
		routes: Object.values(state.entities.routes),
		currentUserId: state.session.currentUser.id,
	};
}

const mdp = dispatch => {
  return {
		fetchRoutes: (userId) => dispatch(fetchRoutes(userId)),
		createRoute: (route) => dispatch(createRoute(route)),
		updateRoute: (route) => dispatch(updateRoute(route)),
		clearRoutes: () => dispatch(clearRoutes()),
	};
}

export default withRouter(connect(msp, mdp)(RouteIndex));