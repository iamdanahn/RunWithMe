import { connect } from "react-redux";
import { login, createNewUser, receiveSessionErrors } from "../../actions/session_actions";
import Signup from "./signup";

const msp = (state, ownProps) => {
	debugger;
	return {
		errors: state.errors.session,
	};
};

const mdp = (dispatch) => {
	const demo = ({email: 'demo@demo.com', password:'123456'})

	return {
		loginDemo: () => dispatch(login(demo)),
		createNewUser: (formUser) => dispatch(createNewUser(formUser)),
    clearErrors: (errors) => dispatch(receiveSessionErrors(errors))
	};
};

export default connect(msp, mdp)(Signup);
