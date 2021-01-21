import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import DashboardContainer from './dashboard/dashboard_container'

const App = () => {
  return (
		<div className="main-app">
      <Route path="/" component={NavBarContainer} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
		</div>
	);
}

export default App;