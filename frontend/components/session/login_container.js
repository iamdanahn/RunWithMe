import { connect } from 'react-redux';
import { login, receiveSessionErrors } from '../../actions/session_actions'
import Login from "./login_hook";

const msp = (state, ownProps) => {
	return {
		errors: state.errors.session,
	};
}

const mdp = dispatch => {
  const demo = ({email: 'demo@demo.com', password:'123456'})
  
  return ({
    login: user => dispatch(login(user)),
    loginDemo: () => dispatch(login(demo)),
    clearErrors: (errors) => dispatch(receiveSessionErrors(errors))
  })
}

export default connect(msp, mdp)(Login)