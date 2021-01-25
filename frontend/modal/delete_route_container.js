import { connect } from 'react-redux';
import { deleteRoute } from '../actions/route_actions'
import { closeModal } from '../actions/modal_actions'
import DeleteRoute from './delete_route'

const msp = (state, ownProps) => {
  // debugger
  return({
    route: ownProps.routeid
  })
}

const mdp = dispatch => {
  return ({
    // deleteRoute: (routeId) => dispatch(deleteRoute(routeId)),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(DeleteRoute);