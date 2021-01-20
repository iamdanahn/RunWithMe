import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  sessionLinks() {
    <div className="masthead-login-signup">
			<Link className="button" id="button-login" to="/login">
				Login
			</Link>
			<Link className="button" id="button-signup" to="/signup">
				Sign up
			</Link>
		</div>;
  }

  render() {
    const { currentUser, logout } = this.props;

    // const sessionLinks = currentUser ? (
    //     <div>
    //       <button onClick={logout}>Logout</button>

    //     </div>
    //   ) : (

    //   );
    


    return (
      <div className="masthead">
        <div className="run-with-me-logo">
          <h3>Run with me logo here</h3>
        </div>
        <div className="masthead-links">
          <Link to="">Workouts</Link>
          <Link to="">Routes</Link>
          <Link to="">Commmunity</Link>
          <Link to="">Go MVP</Link>
        </div>
        <div className="masthead-login-signup">
          {this.sessionLinks}
        </div>
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
