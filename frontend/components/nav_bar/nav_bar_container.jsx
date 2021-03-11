import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { logout, receiveSessionErrors } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = (state, ownProps) => {
	const { entities, session } = state;
	return {
		currentUser: session.currentUser,
		loggedIn: Boolean(session.currentUser),
		login_page: <Link to="/login" />,
		signup_page: <Link to="/signup" />,
	};
}

const mdp = dispatch => {
  return {
		logout: () => dispatch(logout()),
		clearErrors: (errors) => dispatch(receiveSessionErrors(errors)),
	};
}

export default connect(msp, mdp)(NavBar)