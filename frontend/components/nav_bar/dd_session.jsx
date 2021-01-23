import React from 'react';
import { Link } from 'react-router-dom'

class SessionLinks extends React.Component {
  
  render() {
    const { currentUser, logout } = this.props

    return currentUser ? (
			<div className="masthead auth">
				<div className="dropdown">
					<button className="navbtn" to="/account/my_profile">
						Welcome {currentUser.first_name}!
					</button>
				</div>
				<div className="dropdown-content">
					<Link to="/routes/search">Find Route</Link>
					<Link to="/routes/create">Create Route</Link>
					<Link to="/routes">My Routes</Link>
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
  }
}

export default SessionLinks;


    // const sessionLinks = currentUser ? (
		// 	<div className="masthead auth">
		// 		<div className="user-pic">
		// 			<Link className="button button-user" to="/account/my_profile">
		// 				Welcome {currentUser.first_name}!
		// 			</Link>
		// 		</div>
		// 		<div className="button-logout">
		// 			<Link onClick={logout} to="/login">
		// 				Logout
		// 			</Link>
		// 		</div>
		// 	</div>
		// ) : (
		// 	<div className="masthead login-signup">
		// 		<Link to="/login">
		// 			<button className="button-login" onClick={this.handleLogin}>
		// 				Login
		// 			</button>
		// 		</Link>
		// 		<Link to="/signup">
		// 			<button className="button-signup" onClick={this.handleSignup}>
		// 				Sign up
		// 			</button>
		// 		</Link>
		// 	</div>
		// );