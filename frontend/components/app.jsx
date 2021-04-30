import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import DashboardContainer from './dashboard/dashboard_container'
import CreateRouteContainer from './routes/create_route_container'
import EditRouteContainer from './routes/edit_route_container'
import RouteShowContainer from './routes/route_show_container'
import FriendMainContainer from "./friends/friend_main_container"
import FriendFindContainer from "./friends/friend_find_container";
import UserContainer from "./user/user_profile_container"
import SplashPage from './splash_page'
import Footer from "./footer/footer";


const App = () => {
  return (
		<div className="main-app">
			<Route path="/" component={NavBarContainer} />

			<Switch>
				<AuthRoute exact path="/" component={SplashPage} />
				<AuthRoute exact path="/signup" component={SignupContainer} />
				<AuthRoute exact path="/login" component={LoginContainer} />
				<ProtectedRoute
					exact
					path="/dashboard"
					component={DashboardContainer}
				/>
				<ProtectedRoute
					exact
					path="/routes/create"
					component={CreateRouteContainer}
				/>
				<ProtectedRoute
					exact
					path="/routes/:routeId/edit"
					component={EditRouteContainer}
				/>
				<ProtectedRoute
					exact
					path="/routes/:routeId"
					component={RouteShowContainer}
				/>
				<ProtectedRoute
					exact
					path="/friends/find"
					component={FriendFindContainer}
				/>
				<ProtectedRoute exact path="/friends" component={FriendMainContainer} />
				<ProtectedRoute exact path="/profile/:id" component={UserContainer} />
			</Switch>

			<Route path="/" component={Footer} />
		</div>
	);
}

export default App;