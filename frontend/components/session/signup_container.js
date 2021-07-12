import { connect } from "react-redux";
import { login, createNewUser, receiveSessionErrors } from "../../actions/session_actions";
import Signup from "./signup_hook";

const msp = (state, ownProps) => {
	return {
		errors: state.errors.session,
	};
};

const mdp = (dispatch) => {
	const demo = ({email: 'demo@demo.com', password:'123456'})
	debugger
	return {
		loginDemo: () => dispatch(login(demo)),
		createNewUser: (formUser) => dispatch(createNewUser(formUser)),
		clearErrors: (errors) => dispatch(receiveSessionErrors(errors))
	};
};

export default connect(msp, mdp)(Signup);
