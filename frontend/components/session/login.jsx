import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoLogin = this.handleDemoLogin.bind(this);
	}


	componentWillUnmount() {
		const errors = [];
		this.props.clearErrors(errors)
	}

	update(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	// renderErrors() {
	// 	return (
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li key={`error-${i}`}>{error}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.login(this.state)
			.then(() => this.props.history.push("/dashboard"));
		// history#push adds new URL to end of history stack
		// clicking back button takes us to previous URL
	}

	handleDemoLogin(e) {
		e.preventDefault();
		this.props
			.loginDemo()
			.then(() => this.props.history.push("/dashboard"))
	}

	render() {
		const {errors} = this.props;

		return (
			<section className="auth-form-ctr">

				<form className="auth-form">
					<div className="header">
						<Link className="other-link" to="/signup">
							<span>SIGN UP</span>
						</Link>
						<br/>
					</div>
					<button className="auth-form btn demo" onClick={this.handleDemoLogin}>
						DEMO LOGIN
					</button>
					<div>
						<input
							className="auth-form input"
							type="email"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email"
						/>
						<div className="auth-form errors">{errors.email}</div>
					</div>

					<div>
						<input
							className="auth-form input"
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
						/>
						<div className="auth-form errors">{errors.password}</div>
					</div>
					<br />
					<button className="auth-form btn" onClick={this.handleSubmit}>
						LOGIN
					</button>
				</form>
			</section>
		);
	}
}

export default Login;
