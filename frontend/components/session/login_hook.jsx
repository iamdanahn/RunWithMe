import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login({ clearErrors, errors, login, loginDemo }) {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const {email, password } = values;
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

      const newValues = { ...values, [e.target.name]: e.target.value };
      setValues(newValues);      
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { email, password };
		login(user).then(() => history.push("/dashboard"));
	};

	const handleDemoLogin = (e) => {
		e.preventDefault();
		loginDemo().then(() => history.push("/dashboard"));
	};

	return (
		<section className="auth-form-ctr">
			<div className="auth-form">
				<div className="header">
					<Link className="other-link" to="/signup">
						<span>SIGN UP</span>
					</Link>
					<br />
				</div>
				<button id="btn-demo" onClick={handleDemoLogin}>
					DEMO LOGIN
				</button>

				<div className="or-box">
					<span className="or-box line"></span>
					<span className="or-box or"> OR </span>
					<span className="or-box line"></span>
				</div>

				<form className="auth-form input-area">
					<div>
						<input
							className={errPresent ? "input err-border" : "input login"}
							type="email"
							name="email"
							value={email}
							onChange={update("email")}
							placeholder="Email from hook"
						/>
					</div>

					<br />

					<div>
						<input
							className={errPresent ? "input err-border" : "input login"}
							type="password"
							name="password"
							value={password}
							onChange={update("password")}
							placeholder="Password"
						/>
						<div></div>
					</div>
					<br />

					<div className="auth-form errors"> {errors} </div>

					<br />

					<button className="auth-form btn" onClick={handleSubmit}>
						LOGIN
					</button>
				</form>
			</div>
		</section>
	);
}

  // METHOD 2 - onChange
	// const [values, setValues] = useState({
  //   email: "",
  //   password: ""
	// });

			// switch (field) {
			// 	case "email":
			// 		setEmail(e.target.value);
			// 		break;
			// 	case "password":
			// 		setPassword(e.target.value);
			// 		break;
			// }