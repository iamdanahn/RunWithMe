import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'

import { login, logout, signup } from './util/session_api_util'

window.login = login
window.logout = logout
window.signup = signup

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	const store = configureStore();

	// TESTING
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	// REMOVE AFTER TEST

	ReactDOM.render(<Root store={store}/>, root);
});
