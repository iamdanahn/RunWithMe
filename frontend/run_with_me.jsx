import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'

// import { login, logout, createNewUser } from './util/session_api_util'

// window.login = login
// window.logout = logout
// window.createNewUser = createNewUser

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	
	let store;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: { [window.currentUser.id]: window.currentUser },
			},
			session: { id: window.currentUser.id },
		};
		store = configureStore(preloadedState);
		delete window.currentUser;
	} else {
		store = configureStore();
	}
	
	// // TESTING
	// window.getState = store.getState;
	// window.dispatch = store.dispatch;
	// // REMOVE AFTER TEST
	ReactDOM.render(<Root store={store}/>, root);
});
