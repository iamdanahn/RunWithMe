import React from 'react';
import { Link } from 'react-router-dom'

class SessionLinks extends React.Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.props.clearErrors();
		this.props.history.push("/login")
	}

	render() {
		const { currentUser, logout } = this.props;

		return currentUser ? (
			<section className="masthead auth">
				<div className="dropdown">
					<button className="navbtn" to="/account/my_profile">
						Welcome {currentUser.first_name}!
					</button>
					<div className="dropdown-content">
						<Link to="">Profile and Settings</Link>
						<Link to="">Connected Apps</Link>
						<Link to="">Support</Link>
						<Link onClick={logout} to="/">
							Logout
						</Link>
					</div>
				</div>
			</section>
		) : (
			<section className="masthead login-signup">
				<Link>
					<button className="button-login" onClick={this.handleClick}>
						Log in
					</button>
				</Link>
				<Link to="/signup">
					<button className="button-signup">
						Sign up
					</button>
				</Link>
			</section>
		);
	}
}

export default SessionLinks;