import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const msp = (state, ownProps) => {
  const { entities, session } = state;
  // debugger
  return {
		currentUser: entities.users[session.id],
    loggedIn: Boolean(state.session.id),
    login_page: <Link to="/login"/>,
    signup_page: <Link to="/signup"/>,
	};
}

const mdp = dispatch => {
  return({
    logout: () => dispatch(logout())
  })
}

export default connect(msp, mdp)(NavBar)