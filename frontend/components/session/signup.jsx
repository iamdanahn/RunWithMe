import React from "react";
import BirthDay from '../birthday_dropdown/birthday'

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
      password: "",
      birth_day: "",
      birth_month: "",
      birth_year: "",
      gender: ""
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.birthdate = this.birthdate.bind(this)
	}


// birthday helper methods to reformat into backend acceptable format
  birthdate() {
    const {birth_day, birth_month, birth_year} = this.state;
    return `${birth_year}-${birth_month}-${birth_day}`;
  }

	update(field) {
		return (e) => {
			this.setState({ [field]: e.target.value });
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
		
		return (
			<div className="session-form">
				<h2>Sign Up!</h2>
				<form>
					<div className="session-form fname">
						<label>
							First name:
							<input
								type="text"
								value={this.state.first_name}
								onChange={this.update("first_name")}
							/>
						</label>
					</div>
					<div className="session-form lname">
						<label>
							Last name:
							<input
								type="text"
								value={this.state.last_name}
								onChange={this.update("last_name")}
							/>
						</label>
					</div>
					<div className="session-form email">
						<label>
							Email:
							<input
								type="text"
								value={this.state.email}
								onChange={this.update("email")}
							/>
						</label>
					</div>
					<div className="session-form pw">
						<label>
							Password:
							<input
								type="password"
								value={this.state.password}
								onChange={this.update("password")}
							/>
						</label>
					</div>

          <div className="session-form birthdate">       
            <div className="session-form bday">
              <label>
                Day:
                <input
                  type="date"
                  value={this.state.birthdate}
                  onChange={this.update("birthdate")}
                />
              </label>
            </div>
            <div className="session-form bmonth">
              <label>
                Month:
                <input
                  type="date"
                  value={this.state.birthdate}
                  onChange={this.update("birthdate")}
                />
              </label>
            </div>
            <div className="session-form byear">
              <label>
                Year:
                <input
                  type="date"
                  value={this.state.birthdate}
                  onChange={this.update("birthdate")}
                />
              </label>
            </div>
          </div>

          <div>
            <BirthDay />
          </div>

          
					<div className="session-form gender">
            <div className="session-form male">
              <label>
                Male:
                <input
                  type="radio"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.update("gender")}
                />
              </label>
            </div>
            <div className="session-form female">
              <label>
                Female:
                <input
                  type="radio"
                  name="gender"
                  value={this.state.gender}
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
