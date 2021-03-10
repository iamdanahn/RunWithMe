import { connect } from "react-redux";
import { createRoute } from "../../actions/route_actions";
import Map from '../map/map'

const msp = (state, ownProps) => {
	const { entities, session, errors } = state;

	return {
		route: {
			name: "",
			creator_id: session.currentUser.id,
			activity: "walk",
			location: "New York City",
			distance: "0 MI",
			markers: [],
		},
		formType: "Create",
	};
};

const mdp = (dispatch) => {
	return {
		action: (route) => dispatch(createRoute(route)),
	};
}

export default connect(msp, mdp)(Map);
