import { connect } from "react-redux";
import {createRoute } from '../../actions/route_actions'
// import RouteMap from "./route_map";
import Map from '../map/map'

const msp = (state, ownProps) => {
  const { entities, session, errors } = state;
  debugger
  return {
    route: {
      name: "",
      creator_id: session.id,
      activity: "",
      location: "New York City",
      distance: "0 MI",
      markers: [],
    },
    formType: "Create",
  }
};

const mdp = (dispatch) => {
	debugger
  return ({
    action: (route) => dispatch(createRoute(route))
  })
}

export default connect(msp, mdp)(Map);
