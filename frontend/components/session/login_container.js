import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import Login from './login'

const msp = (state, ownProps) => {
  // console.log(state)
  // console.log(state.errors)
  // console.log(state.errors.session)
  debugger
  return ({
    errors: state.errors.session
  })
}

const mdp = dispatch => {
  return ({
    login: user => dispatch(login(user))
  })
}

export default connect(msp, mdp)(Login)