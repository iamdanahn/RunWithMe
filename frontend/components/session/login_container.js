import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import Login from './login'

// const msp = (state, ownProps) => {
//   return ({

//   })
// }

const mdp = dispatch => {
  return ({
    login: user => dispatch(login(user))
  })
}

export default connect(null, mdp)(Login)