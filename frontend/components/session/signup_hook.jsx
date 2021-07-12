import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import BirthDay from "./birthday_dd";

export default function Signup({ errors, clearErrors, loginDemo, createNewUser}) {
	const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        bday: "",
        bmonth: "",
        byear: "",
        gender: "",
	});

    const { first_name, last_name, email, password, bday, bmonth, byear, gender } = values;
    const history = useHistory();

	useEffect(() => {
		//used only for unmounting

		return () => {
			const errors = [];
			clearErrors(errors);
		};
	}, []);   

    const formattedState = () => {
        return {
			first_name, last_name, email,
			password,
			birthday: `${byear}-${bmonth}-${bday}`,
			gender,
		};
    }

    const update = (field) => {
        return (e) => {
            e.target.className = "input";
            const newValues = { ...values, [e.target.name]: e.target.value };
            setValues(newValues);      
		};
	};

    const handleClick = (e) => {
        e.preventDefault();
        clearErrors([]);
        history.push("/login");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewUser(formattedState()).then(() => history.push("/dashboard"))
    }
    const handleDemoLogin = (e) => {
        e.preventDefault();
        loginDemo().then(() => history.push("/dashboard"))
    }

    return (
			<div className="auth-form-ctr">
				<form className="auth-form">
					<div className="header">
						<Link to="" className="other-link" onClick={handleClick}>
							LOG IN
						</Link>
					</div>

					<button id="btn-demo" onClick={handleDemoLogin}>
						DEMO LOGIN
					</button>

					<div className="or-box">
						<span className="or-box line"></span>
						<span className="or-box or"> OR </span>
						<span className="or-box line"></span>
					</div>

					<div>
						<input
							type="text"
							value={first_name}
                            name="first_name"
							onChange={update("first_name")}
							placeholder="First name HOOK"
							required
							className={errors["first"] ? "input err-border" : "input"}
						/>
						<div className="auth-form errors">{errors.first}</div>
					</div>
					<div>
							<input
								className={errors["last"] ? "input err-border" : "input"}
								type="text"
								value={last_name}
                                name="last_name"
								onChange={update("last_name")}
								placeholder="Last name"
								required
							/>
						<div className="auth-form errors">{errors.last}</div>
					</div>
					<div>
						<label>
							<input
								className={errors["email"] ? "input err-border" : "input"}
								type="email"
								value={email}
                                name="email"
								onChange={update("email")}
								placeholder="Email"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.email}</div>
					</div>
					<div>
						<label>
							<input
								className={errors["password"] ? "input err-border" : "input"}
								type="password"
								value={password}
                                name="password"
								onChange={update("password")}
								placeholder="Password"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.password}</div>
					</div>

					<BirthDay update={update} errors={errors} />
					<div className="auth-form errors">{errors.birthday}</div>

					<div className={errors["gender"] ? "input err-border" : "input"}>
						<div className="gender">
							<label>
								Male:
								<input
									className="gender-m"
									type="radio"
									name="gender"
									value="M"
									onChange={update("gender")}
								/>
							</label>

							<label>
								Female:
								<input
									className="gender-f"
									type="radio"
									name="gender"
									value="F"
									onChange={update("gender")}
								/>
							</label>
						</div>
					</div>
					<div className="auth-form errors">{errors.gender}</div>
					<br />
					<button className="btn" onClick={handleSubmit}>
						SIGN UP
					</button>
				</form>
			</div>
		);
}

