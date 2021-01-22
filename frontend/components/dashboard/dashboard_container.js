import { connect } from 'react-redux'
import { fetchRoutes, createRoute, deleteRoute } from '../../actions/route_actions'
import Dashboard from './dashboard'

const msp = (state, ownProps) => {
  return({
    routes: Object.values(state.entities.routes)
  })
}

const mdp = dispatch => {
  return({
    fetchRoutes: (routeId) => dispatch(fetchRoutes(routeId)),
    createRoute: (route) => dispatch(createRoute(route)),
    deleteRoute: (routeId) => dispatch(deleteRoute(routeId))
  })
}

export default connect(msp, mdp)(Dashboard)