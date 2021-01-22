import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(e) {
		e.preventDefault();		
		this.props.loggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
	}

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
          <Link onClick={logout} to="/login"> Logout </Link>
        </div>
      </div>
	 	) : (
			<div className="login-signup">
				<div className="button-login">
					<Link to="/login"> Login </Link>
				</div>
				<div className="button-signup">
					<Link to="/signup"> Sign up </Link>
				</div>
			</div>
		);
		

    return (
			<div className="masthead">
				<div className="masthead logo" onClick={this.handleClick} >
					
						{" "} <img src={window.logoURL} alt="run-with-me-logo" /> {" "}
					
				</div>
				<div className="masthead a">
					<div>
						<Link to=""> Workouts </Link>
					</div>
					<div>
						<Link to=""> Routes </Link>
					</div>
					<div>
						<Link to=""> Commmunity </Link>
					</div>
					<div>
						<Link to=""> Go MVP </Link>
					</div>
				</div>
				{sessionLinks}
			</div>
		);
  }
}

export default NavBar;