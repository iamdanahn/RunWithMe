import { connect } from 'react-redux';
import { fetchRoutes } from '../../actions/route_actions';
import RouteIndex from './route_index';

const msp = (state, ownProps) => {
  return ({
    routes: Object.value(state.entities.routes)
  })
}

const mdp = dispatch => {
  return ({
    fetchRoutes: () => dispatch(fetchRoutes())
  })
}

export default connect(msp, mdp)(RouteIndex)