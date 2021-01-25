import { connect } from 'react-redux';
import CreateRouteForm from './create_route_form';
import { createRoute } from '../../actions/route_actions'

// const msp = (state, ownProps) => {
//   return ({

//   })
// }

const mdp = dispatch => {
  return ({
    createRoute: (route) => dispatch(createRoute(route))
  })
}

export default connect(null, mdp)(CreateRouteForm);