import { connect } from 'react-redux';
import { fetchRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const msp = (state, ownProps) => {
  return ({
    routes: Object.values(state.entities.routes)
  })
}

const mdp = dispatch => {
  return ({
    fetchRoutes: () => dispatch(fetchRoutes()),
    createRoute: (route) => dispatch(createRoute(route)),
    updateRoute: (route) => dispatch(updateRoute(route)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
  })
}

export default connect(msp, mdp)(RouteIndex)