import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login({ clearErrors }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		//used only for unmounting

		return () => {
			const errors = [];
			clearErrors(errors);
		};
	});

	function update(field) {
		return (e) => {
			e.target.className = "input";
		};
	}
}
