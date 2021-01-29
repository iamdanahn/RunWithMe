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
			e.target.className = "input";
			this.setState({ [field]: e.target.value });
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.login(this.state)
			.then(() => this.props.history.push("/dashboard"));
		}
		// history#push adds new URL to end of history stack
		// clicking back button takes us to previous URL

	handleDemoLogin(e) {
		e.preventDefault();
		this.props
			.loginDemo().then(() => this.props.history.push("/dashboard"))
	}



	render() {
		 debugger
		const {errors} = this.props;
		const errPresent = errors.length > 0;


		return (
			<section className="auth-form-ctr">
				<form className="auth-form">
					<div className="header">
						<Link className="other-link" to="/signup">
							<span>SIGN UP</span>
						</Link>
						<br />
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
						<input
							className={errPresent ? "input err-border" : "input login"}
							type="email"
							value={this.state.email}
							onChange={this.update("email")}
							placeholder="Email"
						/>
					</div>

					<br />

					<div>
						<input
							className={errPresent ? "input err-border" : "input login"}
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Password"
						/>
						<div></div>
					</div>
					<br />

					<div className="auth-form errors"> {errors} </div>

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
