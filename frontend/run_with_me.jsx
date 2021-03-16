import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { fetchRoutes } from "./actions/route_actions";

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");

	let store;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				user: { [window.currentUser.id]: window.currentUser },
			},
			session: { currentUser: window.currentUser },
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}

	// // TESTING
	// window.getState = store.getState;
	// window.dispatch = store.dispatch;
	// window.fetchRoutes = fetchRoutes;
	// // REMOVE AFTER TEST
	ReactDOM.render(<Root store={store} />, root);
});
