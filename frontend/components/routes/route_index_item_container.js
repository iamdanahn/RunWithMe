import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { deleteRoute } from "../../actions/route_actions"
import RouteIndexItem from "./route_index_item";

// const msp = (state, ownProps) => {
// 	return {
// 		// routes: Object.values(state.entities.routes),
// 	};
// };

const mdp = dispatch => {
  //  // debugger
	return {
		openModal: (modal) => dispatch(openModal(modal)),
		deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
	};
};

export default connect(null, mdp)(RouteIndexItem);
