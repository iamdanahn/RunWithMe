import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { fetchRoute, updateRoute } from "../../actions/route_actions";
import Map from '../map/map'

class EditRouteForm extends React.Component {
  componentDidMount() {
    const routeId = this.props.match.params.routeId;
		 ;
		if (!this.props.routes[routeId]) {
			this.props.fetchRoute(routeId);
		}
		 ;
  }

  render() {
		const { routes, formType, action } = this.props;
		const routeId = this.props.match.params.routeId;
		
		 ;

		return routes[routeId] ? (
			<Map route={routes[routeId]} formType={formType} action={action} />
		) : null;
	}
}


const msp = (state, ownProps) => {
	const { entities, session, errors } = state;
	const routesId = ownProps.match.params.routeId;

	 ;
	return {
		routes: entities.routes,
		formType: "Edit",
	};
};

const mdp = (dispatch) => {
	return {
		action: (route) => dispatch(updateRoute(route)),
		fetchRoute: (routeId) => dispatch(fetchRoute(routeId)),
	};
};

export default withRouter(connect(msp, mdp)(EditRouteForm))
