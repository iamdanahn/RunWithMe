import React from 'react'

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push("/dashboard"));
    // history#push adds new URL to end of history stack
    // clicking back button takes us to previous URL
	}

	render() {
		
		return (
			<div className="session-form">
				<h2>Log In!</h2>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
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
