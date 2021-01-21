import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {



  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = currentUser ? (
			<>
        <div className="masthead user-pic">
          <Link className="button button-user" to="/account/my_profile">
            Welcome {currentUser.first_name}!
          </Link>
        </div>
        <div className="masthead button-logout">
          <Link onClick={logout} to="/login"> Logout </Link>
        </div>
      </>
	 	) : (
			<div className="masthead login-signup">
				<div className="Link button-login">
					<Link to="/login"> Login </Link>
				</div>
				<div className="button button-signup">
					<Link to="/signup"> Sign up </Link>
				</div>
			</div>
		);
    

    return (
			<div className="masthead">
				<div className="run-with-me-logo">
					<img src={window.logoURL} alt="run-with-me-logo"/>
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