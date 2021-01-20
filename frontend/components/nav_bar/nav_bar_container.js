import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = (state, ownProps) => {
  const { entities, session } = state;
  return ({
    currentUser: entities.users[session.id]
  })
}

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout())
  })
}

export default connect(msp, mdp)(NavBar)