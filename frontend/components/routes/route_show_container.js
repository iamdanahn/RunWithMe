import { connect } from 'react-redux';
import { deleteRoute, fetchRoute } from '../../actions/route_actions'
import { fetchUser } from '../../actions/user_actions'
import RouteShow from './route_show'

const msp = (state, ownProps) => {
  debugger
  const routeId = ownProps.match.params.routeId
  const currentUserId = state.session.id

  return {
    route: state.entities.routes[routeId],
    user: state.entities.users[currentUserId],
    sessionId: state.session.id,
  }
}

const mdp = dispatch => {
  return ({
    deleteRoute: route => dispatch(deleteRoute(route)),
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    fetchUser: id => dispatch(fetchUser(id))
  })
}

export default connect(msp, mdp)(RouteShow)