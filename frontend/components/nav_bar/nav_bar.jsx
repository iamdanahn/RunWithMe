import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = currentUser ? (
			<div className="masthead auth">
				<div className="user-pic">
					<Link className="button button-user" to="/account/my_profile">
						Welcome {currentUser.first_name}!
					</Link>
				</div>
				<div className="button-logout">
					<Link onClick={logout} to="/login">
						{" "}
						Logout{" "}
					</Link>
				</div>
			</div>
		) : (
			<div className="masthead login-signup">
				<Link to="/login">
					<button className="button-login" onClick={this.handleLogin}>
						Login
					</button>
				</Link>
				<Link to="/signup">
					<button className="button-signup" onClick={this.handleSignup}>
						Sign up
					</button>
				</Link>

			</div>
		);
    

    return (
			<div className="masthead">
				<div className="masthead logo">
					<Link to="/">
						{" "}
						<img src={window.logoURL} alt="run-with-me-logo" />{" "}
					</Link>
				</div>
				<div className="masthead a-box">
					<div className="links">
						<Link className="link" to="/">
							Workouts
						</Link>
					</div>
					<div className="links">
						<Link className="link" to="/">
							Routes
						</Link>
					</div>
					<div className="links">
						<Link className="link" to="/">
							Commmunity
						</Link>
					</div>
					<div className="links">
						<Link className="link" to="/">
							Go MVP
						</Link>
					</div>
					<div className="links">
						<Link className="link" to="/">
							D Shop
						</Link>
					</div>
				</div>
				{sessionLinks}
			</div>
		);
  }
}

export default NavBar;