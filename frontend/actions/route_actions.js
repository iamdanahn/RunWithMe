import * as RouteAPIUtil from '../util/run_route_api_util'

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE'

const receiveRoutes = (routes) => {
  return ({
    type: RECEIVE_ROUTES,
    routes
  })
}

const receiveRoute = (route) => {
  return ({
    type: RECEIVE_ROUTE,
    route
  })
}

const removeRoute = (routeId) => {
  return ({
    type: REMOVE_ROUTE,
    routeId
  })
}

export const fetchRoutes = () => {
  return dispatch => {
    return RouteAPIUtil.fetchRoutes().then(routes => {
      return dispatch(receiveRoutes(routes))
    })
  }
}
export const fetchRoute = (routeId) => {
  return dispatch => {
    return RouteAPIUtil.fetchRoute(routeId).then(route => {
      return dispatch(receiveRoute(route))
    })
  }
}
export const createRoute = (route) => {
  return dispatch => {
    return RouteAPIUtil.createRoute(route).then(route => {
      return dispatch(receiveRoute(route))
    })
  }
}
export const updateRoute = (route) => {
  return dispatch => {
    return RouteAPIUtil.updateRoute(route).then(route => {
      return dispatch(receiveRoute(route))
    })
  }
}
export const deleteRoute = (routeId) => {
  return dispatch => {
    return RouteAPIUtil.deleteRoute(routeId).then(route => {
      return dispatch(removeRoute(route.id))
    })
  }
}
