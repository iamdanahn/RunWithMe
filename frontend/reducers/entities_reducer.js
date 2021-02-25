import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import routesReducer from './routes_reducer';
import friendsReducer from "./friends_reducer";

export default combineReducers({
  users: usersReducer,
  routes: routesReducer,
  friends: friendsReducer,
});

