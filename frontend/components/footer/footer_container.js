import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Footer from "./footer";

const msp = (state, ownProps) => {
	return {};
};

const mdp = (dispatch) => {
	return {};
};

export default withRouter(connect(msp, mdp)(Footer));
