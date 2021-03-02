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


const App = () => {
  return (
    <div className="main-app">
      <Route path="/" component={NavBarContainer} />
      {/* <Modal /> */}

      <Switch>
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute
          path="/routes/create"
          component={CreateRouteContainer}
        />
        <ProtectedRoute
          path="/routes/:routeId/edit"
          component={EditRouteContainer}
        />
        <ProtectedRoute
          path="/routes/:routeId"
          component={RouteShowContainer}
        />
        <ProtectedRoute
          path="/friendships/find"
          component={FriendFindContainer}
        />
        <ProtectedRoute path="/friendships" component={FriendMainContainer} />
        <ProtectedRoute path="/profile/:friendId" component={UserContainer} />
        <AuthRoute path="/" component={SplashPage} />
      </Switch>
    </div>
  )
}

export default App;