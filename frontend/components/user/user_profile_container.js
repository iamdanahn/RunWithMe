import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserProfile from "./user_profile"
import { findFriends } from "../../actions/friend_actions"
import { fetchUser } from "../../actions/user_actions"
import { fetchRoutes } from "../../actions/route_actions";

const msp = (state, ownProps) => {
	const userId = ownProps.match.params.id;
	return {
		userProfile: state.entities.user,
		// userProfile: state.entities.user,
		routes: Object.values(state.entities.routes),
	};
}

const mdp = (dispatch) => {
  return {
		fetchUser: (id) => dispatch(fetchUser(id)),
		findFriends: (criteria) => dispatch(findFriends(criteria)),
		fetchRoutes: (userId) => dispatch(fetchRoutes(userId)),
	};
}

export default withRouter(connect(msp, mdp)(UserProfile))
