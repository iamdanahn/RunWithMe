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
      gender: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.birthdate = this.birthdate.bind(this)
    this.update = this.update.bind(this);
	}


// birthday helper methods to reformat into backend acceptable format
  birthdate() {
    const {bday, bmonth, byear} = this.state;
    return `${byear}-${bmonth}-${bday}`;
  }

	update(field) {
		// debugger
		return (e) => {
			debugger
			return( this.setState({ [field]: e.target.value }))
		};
  }
  
	handleSubmit(e) {
    e.preventDefault();
    const {first_name, last_name, email, password, gender} = this.state;
    const birthday = this.birthdate();

    const formatted_state = {
      first_name, last_name, email, password, gender, birthday
    }

		this.props
			.createNewUser(formatted_state)
			.then(() => this.props.history.push("/dashboard"));
	}

	render() {
    console.log(this.state);
		
		return (
			<div>
				<div className="login-from-signin">
					<Link to="/login">
						LOG IN
					</Link>
				</div>

				<form className="signup-form">
					<div className="signup-form fname">
						<label>
							First name:
							<input
								type="text"
								value={this.state.first_name}
								onChange={this.update("first_name")}
							/>
						</label>
					</div>
					<div className="signup-form lname">
						<label>
							Last name:
							<input
								type="text"
								value={this.state.last_name}
								onChange={this.update("last_name")}
							/>
						</label>
					</div>
					<div className="signup-form email">
						<label>
							Email:
							<input
								type="text"
								value={this.state.email}
								onChange={this.update("email")}
							/>
						</label>
					</div>
					<div className="signup-form pw">
						<label>
							Password:
							<input
								type="password"
								value={this.state.password}
								onChange={this.update("password")}
							/>
						</label>
					</div>

					<div>
						<BirthDay update={this.update} />
					</div>

					<div className="signup-form gender">
						<div className="signup-form male">
							<label>
								Male:
								<input
									type="radio"
									name="gender"
									value="M"
									onChange={this.update("gender")}
								/>
							</label>
						</div>
						<div className="signup-form female">
							<label>
								Female:
								<input
									type="radio"
									name="gender"
									value="F"
									onChange={this.update("gender")}
								/>
							</label>
						</div>
					</div>

					<button onClick={this.handleSubmit}>Sign Up!</button>
				</form>
			</div>
		);
	}
}

export default Signup;
