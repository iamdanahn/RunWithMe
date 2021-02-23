import React from 'react';
import { connect } from "react-redux";
import { fetchRoute, updateRoute } from "../../actions/route_actions";
// import RouteMap from "./route_map";
import Map from '../map/map'

class EditRouteForm extends React.Component {
  componentDidMount() {
    const routeId = this.props.match.params.routeId;
    this.props.fetchRoute(routeId);
  }

  render() {
    const { route, formType, action } = this.props
    debugger
    return route ? (
      <Map route={route} formType={formType} action={action} />
    ) : null
  }
}


const msp = (state, ownProps) => {
	const { entities, session, errors } = state;
  const routesId = ownProps.match.params.routeId

  debugger
	return {
		route: entities.routes[routesId],
		formType: "Edit",
	};
};

const mdp = (dispatch) => {
	return {
    action: (route) => dispatch(updateRoute(route)),
    fetchRoute: (routeId) => dispatch(fetchRoute(routeId)) 
	};
};

export default connect(msp, mdp)(EditRouteForm);
