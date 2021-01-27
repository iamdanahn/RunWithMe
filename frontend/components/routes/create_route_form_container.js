import { connect } from 'react-redux';
import CreateRouteForm from './create_route_form';
import { createRoute } from '../../actions/route_actions'

const msp = (state, ownProps) => {
  const { entities, session, errors } = state;
  return ({
    currentUser: entities.users[session.id],
    route: {
      creator_id: session.id,
      route_title: "",
      distance: '0',
      activity: ''
    },
    type: "create"
  })
}

const mdp = dispatch => {
  return ({
    action: (route) => dispatch(createRoute(route))
  })
}

export default connect(null, mdp)(CreateRouteForm);