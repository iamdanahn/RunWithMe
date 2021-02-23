import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE
} from '../actions/route_actions';
import merge from 'lodash/merge'

const RoutesReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  const { routes, route, routeId } = action;

  switch (action.type) {
    case RECEIVE_ROUTES:
      return routes;
    case RECEIVE_ROUTE:
      return merge({}, state, {[route.id]: route})
    case REMOVE_ROUTE:
      const newState = merge({}, state);
      delete newState[routeId]
      return newState;
    default:
      return state;
  }
}

export default RoutesReducer;