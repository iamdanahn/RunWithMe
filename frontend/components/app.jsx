import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container'

const App = () => {
  return (
		<div className="main-app">
			<Route path="/" component={NavBarContainer} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
      {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
		</div>
	);
}

export default App;