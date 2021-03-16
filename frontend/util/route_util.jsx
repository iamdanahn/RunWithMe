import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const msp = (state) => {
	return {
		loggedIn: Boolean(state.session.currentUser),
	};
};

// Sends to homepage if logged in (prevents lookin at signup/login page)
const Auth = ({ component: Component, path, loggedIn }) => {
	return (
		<Route
			path={path}
			render={(props) =>
				loggedIn ? <Redirect to="/dashboard" /> : <Component {...props} />
			}
		/>
	);
};

// Sends to component if logged in (sends to login/signup is not logged in)
const Protected = ({ component: Component, path, loggedIn }) => (
	<Route
		path={path}
		render={(props) =>
			loggedIn ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
