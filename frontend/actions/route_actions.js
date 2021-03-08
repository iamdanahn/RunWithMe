import * as RouteAPIUtil from '../util/run_route_api_util'

export const RECEIVE_ROUTES = "RECEIVE_ROUTES";
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE'

const receiveRoutes = (routesInfo) => {
  return ({
    type: RECEIVE_ROUTES,
    routesInfo
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

export const fetchRoutes = (userId) => {
  return dispatch => {
    return RouteAPIUtil.fetchRoutes(userId).then(routesInfo => {
      debugger;
      return dispatch(receiveRoutes(routesInfo))
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
