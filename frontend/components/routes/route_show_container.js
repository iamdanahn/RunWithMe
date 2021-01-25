import { connect } from 'react-router-dom';
import { updateRoute } from '../../actions/route_actions'
import RouteShow from './route_show'

const msp = (state, ownProps) => {
  const routeId = ownProps.match.params.props.id;
  return ({
    route: state.entities.routes[routeId]
  })
}

const mdp = dispatch => {
  return ({
    updateRoute: route => dispatch(updateRoute(route))
  })
}

export default connect(msp, mdp)(RouteShow)