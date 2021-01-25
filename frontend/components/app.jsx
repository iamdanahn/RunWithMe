import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import DashboardContainer from './dashboard/dashboard_container'
import CreateRouteContainer from './routes/create_route_container'
import SplashPage from './splash_page'


const App = () => {
  return (
		<div className="main-app">
				<Route path="/" component={NavBarContainer} />
				{/* <Modal /> */}
			<Switch>
				<AuthRoute path="/signup" component={SignupContainer} />
				<AuthRoute path="/login" component={LoginContainer} />
				<ProtectedRoute path="/routes/create" component={CreateRouteContainer} />
				<ProtectedRoute path="/dashboard" component={DashboardContainer} />
				<AuthRoute path="/" component={SplashPage} />
			</Switch>
		</div>
	);
}

export default App;