
//fetchRoutes()
//fetchRoute(routeId)
//createRoute(route)
//updateRoute(route)
//deleteRoute(routeId)


export const fetchRoutes = () => {
  return $.ajax({
    url: `/api/routes`,
    method: `GET`
  })
}

export const fetchRoute = (routeId) => {
  return $.ajax({
    url: `/api/routes/${routeId}`,
    method: `GET`
  })
}
export const createRoute = (route) => {
  return $.ajax({
    url: `/api/routes`,
    method: `POST`,
    data: { route }
  })
}
export const updateRoute = (route) => {
  return $.ajax({
    url: `/api/routes/${route.id}`,
    method: `PATCH`,
    data: { route }
  })
}
export const deleteRoute = (routeId) => {
  return $.ajax({
    url: `/api/routes/${routeId}`,
    method: `DELETE`
  })
}
