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
	}

	update(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.login(this.state)
			.then(() => this.props.history.push("/dashboard"));
		// history#push adds new URL to end of history stack
		// clicking back button takes us to previous URL
	}

	render() {
    
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
				  Please Log In or <Link to="/signup"> Sign Up </Link>

          {this.renderErrors()}
					<label>
						Email:
						<input
							type="text"
							value={this.state.email}
							onChange={this.update("email")}
						/>
					</label>

					<label>
						Password:
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
						/>
						<button className="button">Log In!</button>
					</label>
				</form>
			</div>
		);
	}
}

export default Login;
