import React from "react";
import { Link } from "react-router-dom";
import BirthDay from '../birthday_dropdown/birthday'

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			bday: "",
			bmonth: "",
			byear: "",
			gender: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
		// this.renderErrors = this.renderErrors.bind(this);
	}

	componentWillUnmount() {
		const errors = [];
		this.props.clearErrors(errors)
	}



	formattedState() {
		const {first_name, last_name, email, password, bday, bmonth, byear, gender} = this.state;
		return {
			first_name,
			last_name,
			email,
			password,
			birthday: `${byear}-${bmonth}-${bday}`,
			gender
		};
	}

	update(field) {
		// debugger
		return (e) => {
			// debugger;
			return this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.createNewUser(this.formattedState())
			.then(() => this.props.history.push("/dashboard")
			 );
	}


	handleDemoLogin(e) {
		e.preventDefault();
		this.props.loginDemo().then(() => this.props.history.push("/dashboard"));
	}

	render() {
		// console.log(this.state);
		const { errors } = this.props;

		return (
			<div className="auth-form-ctr">
				<form className="auth-form">
					<div className="header">
						<Link className="other-link" to="/login">
							<span>LOG IN</span>
						</Link>
					</div>

					<button id="btn-demo" onClick={this.handleDemoLogin}>
						DEMO LOGIN
					</button>

					<div className="or-box">
						<span className="or-box line"></span>
						<span className="or-box or"> OR </span>
						<span className="or-box line"></span>
					</div>

					<div>
						<label>
							<input
								className="auth-form input"
								type="text"
								value={this.state.first_name}
								onChange={this.update("first_name")}
								placeholder="First name"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.first_name}</div>
					</div>
					<div>
						<label>
							<input
								className="auth-form input"
								type="text"
								value={this.state.last_name}
								onChange={this.update("last_name")}
								placeholder="Last name"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.last_name}</div>
					</div>
					<div>
						<label>
							<input
								className="auth-form input"
								type="email"
								value={this.state.email}
								onChange={this.update("email")}
								placeholder="Email"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.email}</div>
					</div>
					<div>
						<label>
							<input
								className="auth-form input"
								type="password"
								value={this.state.password}
								onChange={this.update("password")}
								placeholder="Password"
								required
							/>
						</label>
						<div className="auth-form errors">{errors.password}</div>
					</div>

					<div className="auth-form bday">
						<BirthDay update={this.update} />
					</div>
					<div className="auth-form errors">{errors.birthday}</div>

					<div className="auth-form gender">
						<label>
							Male:
							<input
								className="auth-form gender male"
								type="radio"
								name="gender"
								value="M"
								onChange={this.update("gender")}
							/>
						</label>

						<label>
							Female:
							<input
								className="auth-form gender female"
								type="radio"
								name="gender"
								value="F"
								onChange={this.update("gender")}
							/>
						</label>
					</div>
					<div className="auth-form errors">{errors.gender}</div>
					<br />
					<button className="auth-form btn" onClick={this.handleSubmit}>
						SIGN UP
					</button>
				</form>
			</div>
		);
	}
}

export default Signup;
