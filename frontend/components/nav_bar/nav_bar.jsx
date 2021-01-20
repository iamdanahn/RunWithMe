import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = currentUser ? (
			<div className="masthead user-pic">
				<Link className="button button-user" to="/account/my_profile">
					Welcome {currentUser.first_name}!
				</Link>
        <button onClick={logout}> Logout</button>
			</div>
		) : (
			<div className="masthead login-signup">
				<div className="button button-login">
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
          <h3>Run with me logo here</h3>
        </div>
        <div className="masthead links">
          <Link to=""> Workouts </Link>
          <Link to=""> Routes </Link>
          <Link to=""> Commmunity </Link>
          <Link to=""> Go MVP </Link>
        </div>
        {sessionLinks}
        
      </div>
    )
  }
}

export default NavBar;

  // const welcomeGreeting = () => {
  //   <div className="header-greeting">
  //     <h3 className="header-name">Welcome {currentUser.username}!</h3>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </div>
  // }
