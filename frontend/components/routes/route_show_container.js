import { connect } from 'react-redux';
import { deleteRoute, fetchRoute } from '../../actions/route_actions'
import { fetchUser } from '../../actions/user_actions'
import RouteShow from './route_show'

const msp = (state, ownProps) => {
  const routeId = ownProps.match.params.props.id;
  return ({
    route: state.entities.routes[routeId],
    sessionId: state.session.id,
  })
}

const mdp = dispatch => {
  return ({
    deleteRoute: route => dispatch(deleteRoute(route)),
    fetchRoute: routeId => dispatch(fetchRoute(routeId)),
    fetchUser: id => dispatch(fetchUser(id))
  })
}

export default connect(msp, mdp)(RouteShow)