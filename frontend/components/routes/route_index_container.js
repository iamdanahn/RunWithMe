import { connect } from "react-redux";
import {
	fetchRoutes,
	createRoute,
	updateRoute,
} from "../../actions/route_actions";
import RouteIndex from './route_index';

const msp = (state, ownProps) => {
	debugger;
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
	};
}

export default connect(msp, mdp)(RouteIndex)