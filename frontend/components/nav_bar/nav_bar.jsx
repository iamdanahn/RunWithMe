import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinks from './dd_session'
import RouteLinks from './dd_route'
import WorkoutLinks from './dd_workouts';

class NavBar extends React.Component {
	
  render() {
    const { currentUser, logout } = this.props;

    return (
			<div className="masthead">
				<div className="masthead logo">
					<Link to="/">
						<img src={window.logoURL} alt="run-with-me-logo" />
					</Link>
				</div>

				<div className="masthead a-box">
					<div className="dropdown">
						<button className="navbtn" to="/">
							Workouts
						</button>
						<WorkoutLinks currentUser={currentUser} logout={logout} />
					</div>

					<div className="dropdown">
						<button className="navbtn" to="/">
							Routes
						</button>
						<RouteLinks currentUser={currentUser} logout={logout} />
					</div>

					<div className="dropdown">
						<button className="navbtn" to="/">
							Commmunity
						</button>
						<div className="dropdown-content">
							<Link to="">
								{/* https://github.com/friesarecurly/MapMyRun-Clone*/}
								Github Repo
							</Link>
							<Link to="">
								{/*https://github.com/friesarecurly */}
								Github Profile
							</Link>
							<Link to="">
								{/* https://www.linkedin.com/in/daniel-ahn-6b34151bb/ */}
								Linked In
							</Link>
						</div>
					</div>

					<div className="dropdown">
						<button className="navbtn" to="https://mvp.mapmyrun.com">
							Go MVP
						</button>
					</div>

					<div className="dropdown">
						<button className="navbtn" to="https://www.underarmour.com/en-us">
							UA Shop
						</button>
					</div>
				</div>

				<SessionLinks currentUser={currentUser} logout={logout} />
			</div>
		);
  }
}

export default NavBar;