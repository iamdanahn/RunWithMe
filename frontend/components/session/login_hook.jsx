import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login({ clearErrors, errors, login, loginDemo }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const history = useHistory();
  const errPresent = errors.length > 0;

	useEffect(() => {
		//used only for unmounting

		return () => {
			const errors = [];
			clearErrors(errors);
		};
	});

	const update = (field) => {
		return (e) => {
			e.target.className = "input";

			switch (field) {
				case "email":
					setEmail(e.target.value);
				case "password":
					setPassword(e.target.value);
			}
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { email, password };
    login(user).then(() => history.push("/dashboard"));
	};

  const handleDemoLogin = (e) => {
    e.preventDefault();
    loginDemo().then(() => history.push("/dashboard"))
  }

  

}

  // METHOD 2 - onChange
	// const [values, setValues] = useState({
  //   email: "",
  //   password: ""
	// });

	// const onChangeFunc = (e) => {
	// 	const newValues = { ...values, [e.target.name]: e.target.value };
	// 	setValues(newValues);
	// };