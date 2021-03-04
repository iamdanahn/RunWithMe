
//fetchRoutes()
//fetchRoute(routeId)
//createRoute(route)
//updateRoute(route)
//deleteRoute(routeId)


export const fetchRoutes = (userId) => {
	return $.ajax({
		url: `/api/routes`,
		method: `GET`,
		data: { route: {  creator_id: userId  }  },
		error: (err) => console.log(err),
	});
};

export const fetchRoute = (routeId) => {
  return $.ajax({
		url: `/api/routes/${routeId}`,
		method: `GET`,
		error: (err) => console.log(err),
	});
}
export const createRoute = (route) => {
	return $.ajax({
		url: `/api/routes`,
		method: `POST`,
		data: { route },
		error: (err) => console.log(err),
	});
}
export const updateRoute = (route) => {
	return $.ajax({
		url: `/api/routes/${route.id}`,
		method: `PATCH`,
		data: { route },
		error: (err) => console.log(err),
	});
}
export const deleteRoute = (routeId) => {
  return $.ajax({
		url: `/api/routes/${routeId}`,
		method: `DELETE`,
		error: (err) => console.log(err),
	});
}
