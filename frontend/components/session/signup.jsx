import React from "react";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
      password: "",
      birthdate: "", // format? string here but changes in 
      gender: "", // format? 
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
		this.props
			.createNewUser(this.state)
			.then(() => this.props.history.push("/dashboard"));
	}

	render() {
		
		return (
			<div className="session-form">
				<h2>Sign Up!</h2>
				<form>
					<label>
						Username:
						<input
							type="text" value={this.state.username} onChange={this.update("username")}
						/>
					</label>
					<label>
						Email:
						<input type="text" value={this.state.email} onChange={this.update("email")}
						/>
					</label>
					<label>
						Password:
						<input type="password" value={this.state.password} onChange={this.update("password")}
						/>
					</label>
					<label>
            Birthday:
            <input type="date" value={this.state.birthdate} onChange={this.handleInput("birthdate")}
            />
          </label>
					<label>
            Male:
            <input type="radio" name="gender" value={this.state.gender} onChange={this.handleInput("gender")}
            />
          </label>
          <label>
            Female:
            <input type="radio" name="gender" value={this.state.gender} onChange={this.handleInput("gender")}
            />
          </label>

          
          <button onClick={this.handleSubmit}>Sign Up!</button>
				</form>
			</div>
		);
	}
}

export default Signup;
